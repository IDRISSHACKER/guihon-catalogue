pipeline{
     environnement{
        GITHUB_REPOSITORY = 'https://github.com/IDRISSHACKER/guihon-catalogue.git'
     }

     agent any

    stage('Obtaining project from github'){
        git $GITHUB_REPOSITORY
    }

    stage('Setup environnement'){
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/setup.yml'
        )
    }

    stage('Test app'){
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/test.yml'
        )
    }

    stage('Build for prod'){
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/build.yml'
        )
    }

    stage('Deploy in prod'){
        script{
            sh '''
                ansible-playbook ./infrastructure/deploy.yml
                echo "Cluster is starting"
                sleep 5
            '''
        }
    }

    stage('Configure firewall and update SSL/TLS'){
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/endsetup.yml'
        )
    }

}
