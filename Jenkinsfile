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
        script {
          def imageTag = "${dockerHubRegistry}:${currentBuild.number}"
          sh "docker build . -t ${imageTag}"
          sh "docker build . -t ${dockerHubRegistry}:latest"
        }
      }
    }

    stage('Docker Image Push') {
      steps {
        withDockerRegistry([url: "https://index.docker.io/v1/", credentialsId: dockerHubRegistryCredential]) {
          script {
            def imageTag = "${dockerHubRegistry}:${currentBuild.number}"
            sh "docker push ${imageTag}"
            sh "docker push ${dockerHubRegistry}:latest"
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