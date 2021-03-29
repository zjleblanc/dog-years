# dog-years

I created this simple web app because I recently got a puppy and constantly get asked how old he is... but never actually know the right answer. Using the playbooks in this repo, you can easily spin up a progressive web app that can be pinned to the home screen on your phone!

## Hosting Support

Currently, hosting options are limited, but I hope to add more in the future. Feel free to fork or merge additional support for new platforms.

Supported:
- Apache2 (tested on Raspbian)
- Firebase
- AWS (S3)

Roadmap:
- Azure (Blob)

## Simple Setup

1. Clone this repository
2. Populate [dog_info.yml](dog_info.yml) with your dog's information
3. [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) on your control machine
4. Install other python reqs `pip install -r requirements.txt`
5. Install role reqs `ansible-galaxy install -r roles/requirements.yml`
6. Choose hosting platform

#### Apache2

- Copy [inventory.example](inventory.example) to inventory and populate the placeholder variables to tell Ansible where to deploy the site
- Complete [SSH setup](https://www.bogotobogo.com/DevOps/Ansible/Ansible-SSH-Connection-Setup-Run-Command.php) so that Ansible can use privilege escalation for tasks when needed

#### Firebase

- Create a Firebase account
- Create a new project (remember the name for later!)
- [Install](https://firebase.google.com/docs/cli) the Firebase CLI
- [Generate](https://firebase.google.com/docs/cli#cli-ci-systems) a token for your automated deployment
    - `firebase login:ci`
- Export the token 
    - `export FIREBASE_TOKEN=<token>`

#### AWS

- TODO

## Deploying the Site

Included in the repo are a few Ansible playbooks used to deploy the site to a specified host service. To take advantage of Ansible Automation, run one of the following commands:

- Apache2: `ansible-playbook site.yml -e host_service=apache`
- Firebase `ansible-playbook site.yml -e host_service=firebase -e project_name=<project-name> [-e firebase_token=<token>]`
- AWS: `ansible-playbook site.yml -e host_service=aws -e project_name=<project-name>`

## Testing the Site

A simple smoke test playbook is included in the repo as well. To run, use the following command:

- `ansible-playbook smoke-test.yml -e host_service=<chosen-service> [-e project_name=<project-name]`