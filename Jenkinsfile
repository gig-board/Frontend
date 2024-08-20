pipeline {
  agent any

  environment {
    dockerHubRegistry = 'potatoj1n/gigboard-fe'
    dockerHubRegistryCredential = 'credential-dockerhub'
    githubCredential = 'credential-github'
    gitEmail = 'appabomul@gmail.com'
    gitName = 'potatoj1n'
    argoCDServer = '172.18.0.2 :32025' // Argo CD 서버 주소
    argoCDAppName = 'gigboard-fe'
    argoCDUsername = 'admin' // Argo CD 사용자명
    argoCDPassword = 'GcjwYiWK3yYPz6iQ' // Argo CD 비밀번호
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
          def imageTag = "${dockerHubRegistry}:latest"
          sh "docker build . -t ${imageTag}"
        }
      }
    }

    stage('Docker Image Push') {
      steps {
        withDockerRegistry([url: "https://index.docker.io/v1/", credentialsId: dockerHubRegistryCredential]) {
          script {
            def imageTag = "${dockerHubRegistry}:latest"
            sh "docker push ${imageTag}"
          }
        }
      }
    }
    
    stage('Login to Argo CD') {
      steps {
        script {
          sh "argocd login ${argoCDServer} --username ${argoCDUsername} --password ${argoCDPassword} --insecure"
        }
      }
    }

    stage('Sync Argo CD Application') {
      steps {
        script {
          sh "argocd app sync ${argoCDAppName} --server ${argoCDServer} --insecure"
        }
      }
    }
  }
}
