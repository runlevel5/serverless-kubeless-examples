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
$ aws-vault exec admin@dev-cluster -- npx serverless deploy --namespace pr-app
$ aws-vault exec admin@dev-cluster -- npx serverless invoke --function create-user --log --data 'hello world!' --namespace pr-app
Serverless: Calling function: create-user...
--------------------------------------------------------------------
Hello world!
$ aws-vault exec admin@dev-cluster -- serverless remove --namespace pr-app
$ aws-vault exec admin@dev-cluster -- kubectl remove namespace pr-app
```
