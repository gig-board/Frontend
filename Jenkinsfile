pipeline {
  agent any

  environment {
    dockerHubRegistry = 'potatoj1n/gigboard-fe'
    dockerHubRegistryCredential = 'credential-dockerhub'
    githubCredential = 'credential-github'
    gitEmail = 'appabomul@gmail.com'
    gitName = 'potatoj1n'
    argoCDServer = '172.18.0.2:32025' // Argo CD 서버 주소
    argoCDAppName = 'gigboard-fe'
    argoCDUsername = 'admin' // Argo CD 사용자명
    argoCDPassword = 'GcjwYiWK3yYPz6iQ' // Argo CD 비밀번호
    newTag = "${env.BUILD_ID}" // Unique tag for each build
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
          def imageTag = "${dockerHubRegistry}:${newTag}"
          sh "docker build . -t ${imageTag}"
        }
      }
    }

    stage('Docker Image Push') {
      steps {
        withDockerRegistry([url: "https://index.docker.io/v1/", credentialsId: dockerHubRegistryCredential]) {
          script {
            def imageTag = "${dockerHubRegistry}:${newTag}"
            sh "docker push ${imageTag}"
          }
        }
      }
    }

    stage('Update Deployment File') {
      steps {
        script {
          // Clone the Git repository containing the Kubernetes manifests
          checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[credentialsId: githubCredential, url: 'https://github.com/gig-board/DeploymentRepo.git']]])

          // Update the deployment file with the new image tag
          def imageTag = "${dockerHubRegistry}:${newTag}"
          sh """
            echo "Updating image tag to ${imageTag}"
            sed -i 's|${dockerHubRegistry}:latest|${imageTag}|g' k8s/deployment.yaml
            git config user.email "${gitEmail}"
            git config user.name "${gitName}"
            git add k8s/deployment.yaml
            git commit -m "Update image tag to ${newTag}"
            git push origin main
          """
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
