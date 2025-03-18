pipeline {
    agent any

    environment {
        NODE_VERSION = '22'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SamVESIT/DevOps-Assignment-1.git'
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS 22', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart server.js'
            }
        }
    }

    post {
        success {
            emailext subject: "Build Success: ${env.JOB_NAME} ${env.BUILD_NUMBER}",
                     body: "Build and deployment were successful!",
                     to: "your-email@example.com"
        }

        failure {
            emailext subject: "Build Failed: ${env.JOB_NAME} ${env.BUILD_NUMBER}",
                     body: "Build failed. Please check logs in Jenkins.",
                     to: "your-email@example.com"
        }
    }
}
