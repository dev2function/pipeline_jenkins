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
        sh 'docker build -t leaderhub/app-test .'
      }
    }

    stage('Test C&R container') {
      steps {
        sh 'docker system prune -a'
        sh 'docker run --rm -d -p 3000:3000 leaderhub/app-test'
      }
    }

    stage('Push image') {
      steps {
        sh 'docker push leaderhub/app-test'
        sh 'docker login --username=devops2leader --password Eiuy76008Riuy76009'
      }
    }

    stage('Message') {
      steps {
        echo 'success'
      }
    }

  }
}