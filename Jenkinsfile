pipeline {
  agent {
    kubernetes {
      yamlFile 'kaniko-builder.yaml'
    }
  }

  environment {
    dockerHubRegistry = 'potatoj1n/gigboard-fe'
    dockerHubRegistryCredential = 'credential-dockerhub'
    namespace = 'frontend'
    githubCredential = 'credential-github'
    gitEmail = 'appabomul@gmail.com'
    gitName = 'potatoj1n'
    argocdServer = 'http://localhost:4000' // Argo CD 서버 주소
    argocdAppName = 'gigboard-fe' // Argo CD 애플리케이션 이름
  }

  stages {
    stage('Checkout Application Git Branch') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: githubCredential, url: 'https://github.com/gig-board/Frontend.git']]])
      }
    }

   stage('Build & Push with Kaniko') {
      steps {
        container(name: 'kaniko', shell: '/busybox/sh') {
          sh '''#!/busybox/sh

            /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination=${dockerHubRegistry} --destination=${dockerHubRegistry}:latest
          '''
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

    // stage('Sync with Argo CD') {
    //   steps {
    //     script {
    //       sh """
    //         argocd --server ${argocdServer} --auth-token ${argocdAuthToken} app sync ${argocdAppName}
    //       """
    //     }
    //   }
    // }
  }
}
