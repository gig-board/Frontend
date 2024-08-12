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

    stage('Kaniko Image Build and Push') {
      steps {
        script {
          def imageTag = "${dockerHubRegistry}:${currentBuild.number}"
          sh """
            docker run --rm \
              -v ${pwd}/workspace:/workspace \
              -v ~/.docker/config.json:/kaniko/.docker/config.json \
              gcr.io/kaniko-project/executor:latest \
              --context=/workspace \
              --dockerfile=/workspace/Dockerfile \
              --destination=${dockerHubRegistry}:${currentBuild.number} \
              --destination=${dockerHubRegistry}:latest
          """
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        script {
          def imageTag = "${dockerHubRegistry}:${currentBuild.number}"
          def sedCommand = "sed -i 's|image: .*|image: ${imageTag}|' deployment.yaml"
          sh sedCommand
          sh "kubectl apply -f deployment.yaml --namespace=${namespace}"
        }
      }
    }
  }
}
