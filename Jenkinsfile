/* pipeline 변수 설정 */
def DOCKER_IMAGE_NAME = "potatoj1n/gigboard-fe"            // 도커 이미지 이름
def DOCKER_IMAGE_TAGS = "latest"                           // 도커 이미지 태그
def NAMESPACE = "frontend"                                  // 쿠버네티스 네임스페이스
def VERSION = "${env.BUILD_NUMBER}"                        // 빌드 버전
def DATE = new Date()                                      // 현재 날짜


pipeline {
    agent {
        kubernetes {
            label 'builder'
            defaultContainer 'node'
            containers {
                containerTemplate(name: 'node', image: 'node:lts', command: 'cat', ttyEnabled: true)
                containerTemplate(name: 'docker', image: 'docker:latest', command: 'cat', ttyEnabled: true)
                containerTemplate(name: 'kubectl', image: 'lachlanevenson/k8s-kubectl:v1.24.1', command: 'cat', ttyEnabled: true)
            }
            volumes {
                hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
            }
        }
    }
    
    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                container('node') {
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }
        
        
        stage('Docker Build') {
            steps {
                container('docker') {
                    withCredentials([usernamePassword(credentialsId: 'docker_hub_auth', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh "docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAGS} ."
                        sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                        sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAGS}"
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                container('kubectl') {
                    withCredentials([usernamePassword(credentialsId: 'kube_config', usernameVariable: 'KUBE_USER', passwordVariable: 'KUBE_PASSWORD')]) {
                        // 네임스페이스가 존재하지 않으면 생성
                        sh "kubectl get ns ${NAMESPACE} || kubectl create ns ${NAMESPACE}"

                        // 시크릿 생성
                        sh """
                            kubectl get secret my-secret -n ${NAMESPACE} || \
                            kubectl create secret docker-registry my-secret \
                            --docker-server=https://index.docker.io/v1/ \
                            --docker-username=${USERNAME} \
                            --docker-password=${PASSWORD} \
                            --docker-email=example@example.com \
                            -n ${NAMESPACE}
                        """
                        
                        // 배포 파일 수정
                        sh "echo ${VERSION}"
                        sh "sed -i.bak 's#VERSION_STRING#${VERSION}#' ./k8s/deployment.yaml"
                        sh "echo ${DATE}"
                        sh "sed -i.bak 's#DATE_STRING#${DATE}#' ./k8s/deployment.yaml"

                        // 배포 수행
                        sh "kubectl apply -f ./k8s/deployment.yaml -n ${NAMESPACE}"
                        sh "kubectl apply -f ./k8s/service.yaml -n ${NAMESPACE}"
                    }
                }
            }
        }
    }
}
