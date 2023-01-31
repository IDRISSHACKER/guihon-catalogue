node{
    stage('Clone'){
        git 'https://github.com/IDRISSHACKER/guihon-catalogue.git'
    }
    stage('Ansible'){
        ansiblePlaybook(
            colorized: true,
            playbook: './infrastructure/plabook.yml'
        ) 
    }
}
