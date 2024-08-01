/* pipeline 변수 설정 */
def DOCKER_IMAGE_NAME = "potatoj1n/gigboard-fe"            // 도커 이미지 이름
def DOCKER_IMAGE_TAGS = "latest"                           // 도커 이미지 태그
def VERSION = "${env.BUILD_NUMBER}"                        // 빌드 버전
def DATE = new Date()                                      // 현재 날짜


pipeline {
     agent {
        docker {
            image 'node:21' // Node.js 21이 포함된 Docker 이미지
            args '-u root:root' // npm global install 등을 위해 root 권한 사용
        }
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gig-board/Frontend.git', credentialsId:'eunjin_github_id'
            }
        }
        
        stage('Build') {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        
        stage('Docker Build') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_hub_token', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAGS} ."
                    sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                    sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAGS}"
                }
            }
        }
        
    }
}
