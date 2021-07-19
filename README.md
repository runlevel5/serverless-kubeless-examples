# An example on kubeless function deployment with serverless framework CLI

```console
$ npm install
$ export KUBECONFIG=~/.kube/config
$ aws-vault exec admin@dev-cluster -- kubectl create namespace test
$ aws-vault exec admin@dev-cluster -- npx serverless deploy
$ aws-vault exec admin@dev-cluster -- npx serverless invoke --function create-user --log --data 'hello world!'
Serverless: Calling function: create-user...
--------------------------------------------------------------------
Hello world!
$ aws-vault exec admin@dev-cluster -- serverless remove
$ aws-vault exec admin@dev-cluster -- kubectl remove namespace test
```
