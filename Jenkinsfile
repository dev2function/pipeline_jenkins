pipeline {
  agent any
  stages {
    stage('Pull') {
      steps {
        git(url: 'https://github.com/dev2function/pipeline_jenkins.git', branch: 'master')
      }
    }

    stage('Build image') {
      steps {
        sh 'app = docker.build("leaderhub/app-test")'
      }
    }

    stage('Registry') {
      steps {
        sh 'docker.withRegistry( "https://hub.docker.com/repository/docker/leaderhub/app-test", "docker_id" )'
      }
    }

    stage('Push image') {
      steps {
        sh  dockerImage.push()
            app.push("latest")
      }
    }

    stage('Message') {
      steps {
        echo 'GOOD!'
      }
    }

  }
}
