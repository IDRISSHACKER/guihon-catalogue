node{

    stage('Obtaining project from github'){
        git 'https://github.com/IDRISSHACKER/guihon-catalogue.git'
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
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/deploy.yml'
        )
    }

    stage('Configure firewall and update SSL/TLS'){
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/endsetup.yml'
        )
    }

}
