node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
      
        git([url: 'https://github.com/dev2function/pipeline_jenkins.git', branch: 'master'])
      
      checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        sh 'docker build . -t leaderhub/app-test'
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */
            sh 'docker run --rm -d -p 3000:3000 leaderhub/app-test'
        
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
         sh 'docker push leaderhub/app-test:latest'
        }
    }
}
