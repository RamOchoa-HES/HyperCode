pipeline{
    agent any

    stages {

        stage('Build') {
            steps {
                withMaven(maven: 'maven_hypercode'){
                    sh 'mvn clean package'
                }
            }
        }

        stage('Test'){
            steps {
                withMaven(maven: 'maven_hypercode'){
                    sh 'mvn test'
                }
            }
        }

        stage('Deploy'){
            steps {
                withCredentials([[$class          : 'UsernamePasswordMultiBinding',
                                  credentialsId   : 'PCF_LOGIN',
                                  usernameVariable: 'USERNAME',
                                  passwordVariable: 'PASSWORD']]) {

                    sh '/usr/local/bin/cf login -a http://api.run.pivotal.io -u $USERNAME -p $PASSWORD'
                    sh '/usr/local/bin/cf push'
                }
            }

        }
    }
}