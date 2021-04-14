pipeline {
  agent any
  stages {
    stage('Git pull') {
      steps {
        git(branch: 'master', url: 'https://github.com/dev2function/pipeline_kubernetes.git')
      }
    }

    stage('Build image') {
      steps {
        dockerImage = docker.build registry + ":$BUILD_NUMBER" 
      }
    }

    stage('Test C&R container') {
      steps {
        
      }
    }

    stage('Push image') {
      steps {
        docker.withRegistry( '', registryCredential ) { 
        dockerImage.push() 
      }
    }

    stage('Message') {
      steps {
        echo 'success'
      }
    }

  }
}
