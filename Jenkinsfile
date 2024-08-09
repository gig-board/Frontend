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

    stage('Docker Image Build') {
      steps {
        sh "docker build . -t ${dockerHubRegistry}:${currentBuild.number}"
        sh "docker build . -t ${dockerHubRegistry}:latest"
      }
    }

    stage('Docker Image Push') {
      steps {
        withDockerRegistry([url: "https://index.docker.io/v1/", credentialsId: dockerHubRegistryCredential]) {
          sh "docker push ${dockerHubRegistry}:${currentBuild.number}"
          sh "docker push ${dockerHubRegistry}:latest"
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        // Deployment YAML을 수정하여 최신 이미지를 사용
        sh """
          sed -i 's|image: .*$|image: ${dockerHubRegistry}:${currentBuild.number}|' deployment.yaml
        """
        
        // 수정된 deployment.yaml 파일을 Kubernetes에 적용
        sh "kubectl apply -f deployment.yaml --namespace=${namespace}"
      }
    }
  }
}
