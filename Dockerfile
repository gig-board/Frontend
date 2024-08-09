# Node.js를 사용하여 애플리케이션을 빌드하는 단계
FROM node:lts as build

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# Nginx를 사용하여 빌드된 애플리케이션을 서빙하는 단계
FROM nginx:stable-alpine

# 기본 Nginx 설정을 삭제합니다.
RUN rm -rf /etc/nginx/conf.d

# 새로운 Nginx 설정을 복사합니다.
COPY conf/nginx.conf /etc/nginx/nginx.conf

# 빌드된 애플리케이션을 Nginx의 기본 웹 디렉토리로 복사합니다.
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Nginx를 실행합니다.
CMD [ "nginx", "-g", "daemon off;" ]
