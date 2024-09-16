pipeline {
  agent any

  environment {
    dockerHubRegistry = 'potatoj1n/gigboard-fe'
    dockerHubRegistryCredential = 'credential-dockerhub-fe'
    githubCredential = 'credential-github-fe'
    DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
    gitEmail = 'appabomul@gmail.com'
    gitName = 'potatoj1n'
    argoCDServer = '172.18.0.3:32025' // Argo CD 서버 주소
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
          def imageTag = "${dockerHubRegistry}:${DOCKER_IMAGE_TAG}"
          sh "docker build . -t ${imageTag}"
        }
      }
    }

    stage('Docker Image Push') {
      steps {
        withDockerRegistry([url: "https://index.docker.io/v1/", credentialsId: dockerHubRegistryCredential]) {
          script {
            def imageTag = "${dockerHubRegistry}:${DOCKER_IMAGE_TAG}"
            sh "docker push ${imageTag}"
          }
        }
      }
    }

    stage('Update Image Tag in Deployment File') {
      steps {
        script {
          def fileToUpdate = "./k8s/deployment.yaml"
          sh """
          sed -i 's|image: potatoj1n/gigboard-fe:.*|image: potatoj1n/gigboard-fe:${DOCKER_IMAGE_TAG}|' ${fileToUpdate}
          """

          // Git commit
          sh """
          git status
          git add ${fileToUpdate}
          git commit -m 'Update image tag to ${DOCKER_IMAGE_TAG}' || echo "No changes to commit"
          """
        }
      }
    }

    stage('Push Changes to GitHub') {
      steps {
        withCredentials([
          usernamePassword(
            credentialsId: githubCredential,
            usernameVariable: 'GIT_USERNAME',
            passwordVariable: 'GIT_PASSWORD'
          )
        ]) {
          script {
            sh """
            git config user.email "${gitEmail}"
            git config user.name "${gitName}"
            git pull origin main --rebase || echo "Failed to pull from origin/main"
            git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/gig-board/Frontend.git main || echo "Failed to push changes to origin/main"
            """
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
