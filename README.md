# dog-years

I created this simple web app because I recently got a puppy and constantly get asked how old he is... but never actually know the right answer. Using the playbooks in this repo, you can easily spin up a progressive web app that can be pinned to the home screen on your phone!

## Hosting Support

Currently, hosting options are limited, but I hope to add more in the future. Feel free to fork or merge additional support for new platforms.

Supported:
- Apache2 (tested on Raspbian)
- Firebase

Roadmap:
- AWS (S3)
- Azure (Blob)

## Simple Setup

1. Clone this repository
2. Populate [dog_info.yml](dog_info.yml) with your dog's information
3. Choose hosting platform

### Apache Setup

- Copy [inventory.example](inventory.example) to inventory and populate the placeholder variables to tell Ansible where to deploy the site
- Complete [SSH setup](https://www.bogotobogo.com/DevOps/Ansible/Ansible-SSH-Connection-Setup-Run-Command.php) so that Ansible can use privilege escalation for tasks when needed

### Firebase Setup

- Create a Firebase account
- Create a new project
- [Install](https://firebase.google.com/docs/cli) the Firebase CLI
- [Generate](https://firebase.google.com/docs/cli#cli-ci-systems) a token for your automated deployment
    - `firebase login:ci`
- Export the token 
    - `export FIREBASE_TOKEN=<token>`

## Running the Playbooks

... TODO ...