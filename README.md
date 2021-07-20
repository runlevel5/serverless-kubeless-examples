# An example on kubeless function deployment with serverless framework CLI

## Prerequisites

* Latest LTS NodeJS
* K8S cluster running latest Kubeless
* kubectl

## How to?
```console
$ npm install
$ export KUBECONFIG=~/.kube/config
$ aws-vault exec admin@dev-cluster -- kubectl create namespace pr-app
$ aws-vault exec admin@dev-cluster -- npx serverless deploy --namespace pr-app --rootDomain example.com
$ aws-vault exec admin@dev-cluster -- npx serverless invoke --function admin-api--create-user --log --data 'hello world!' --namespace pr-app
Serverless: Calling function: admin-api--create-user...
--------------------------------------------------------------------
Hello world!

$ aws-vault exec admin@dev-cluster -- kubeless trigger http create admin-api--create-user --gateway traefik --function-name admin-api--create-user --namespace default --hostname example.com --path create-user
$ aws-vault exec admin@dev-cluster -- kubeless trigger http create admin-api--list-users --gateway traefik --function-name admin-api--list-users --namespace default --hostname example.com --path list-users

$ aws-vault exec admin@dev-cluster -- serverless remove --namespace pr-app
$ aws-vault exec admin@dev-cluster -- kubectl remove namespace pr-app
```
