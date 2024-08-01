/* pipeline 변수 설정 */
def DOCKER_IMAGE_NAME = "potatoj1n/gigboard-fe"  // 도커 이미지 이름
def DOCKER_IMAGE_TAGS = "latest"                 // 도커 이미지 태그
def VERSION = "${env.BUILD_NUMBER}"              // 빌드 버전
def DATE = new Date()                            // 현재 날짜

pipeline {
    agent any
    environment {
        NODE_IMAGE = 'node:14'
        DOCKER_IMAGE = 'docker:latest'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gig-board/Frontend.git', credentialsId: 'eunjin_github_id'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    docker.image(env.NODE_IMAGE).inside {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
        
        stage('Docker Build') {
            steps {
                script {
                    docker.image(env.DOCKER_IMAGE).inside {
                        withCredentials([usernamePassword(credentialsId: 'docker_hub_token', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh "docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAGS} ."
                            sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                            sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAGS}"
                        }
                    }
                }
            }
        }
    }
}
