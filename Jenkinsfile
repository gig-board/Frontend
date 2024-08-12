pipeline {
    agent any
    

    environment {
        dockerHubRegistry = 'potatoj1n/gigboard-fe'
        dockerHubRegistryCredential = 'credential-dockerhub'
        namespace = 'frontend'
        githubCredential = 'credential-github'
        gitEmail = 'appabomul@gmail.com'
        gitName = 'potatoj1n'
    }

    stages {
        stage('Checkout Application Git Branch') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: githubCredential, url: 'https://github.com/gig-board/Frontend.git']]])
            }
        }

        stage('Docker Image Build with Kaniko') {
            steps {
                script {
                    def imageTag = "${dockerHubRegistry}:${currentBuild.number}"
                    def contextDir = '/workspace'
                    
                    // Kaniko 빌드를 위한 컨테이너 실행
                    docker.image('gcr.io/kaniko-project/executor:latest').inside('-v ${WORKSPACE}:${contextDir} -v ~/.docker/config.json:/kaniko/.docker/config.json') {
                        sh """
                        /kaniko/executor \
                            --context=${contextDir} \
                            --dockerfile=${contextDir}/Dockerfile \
                            --destination=${imageTag} \
                            --destination=${dockerHubRegistry}:latest
                        """
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    def imageTag = "${dockerHubRegistry}:${currentBuild.number}"
                    // Alternative way to handle the sed command
                    def sedCommand = "sed -i 's|image: .*|image: ${imageTag}|' deployment.yaml"
                    sh sedCommand
                    sh "kubectl apply -f deployment.yaml --namespace=${namespace}"
                }
            }
        }
    }
}
