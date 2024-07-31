
pipeline {
    agent any
    
    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gig-board/Frontend.git', credentialsId:'eunjin_github_id'
            }
        }
        
        stage('Build') {
            steps {
               echo 'Buildings...'
            }
        }
        
        
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}

