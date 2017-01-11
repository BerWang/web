
# Configuring Jenkins

Create an account at https://hub.openshift.com and log in.

Deploy a Jenkins Server by clicking on the button at https://hub.openshift.com/quickstarts/98-jenkins-server which will create a small CI server. Launch this.

Check that ruby 2.x is installed on the development machine then install the openshift tools. Finally run the rhc setup subcommand.
```
$ ruby -e 'puts "Welcome to Ruby"'
Welcome to Ruby
$ sudo gem install rhc
...
$ rhc setup
...
```
Now you can SSH into the server to retrieve the username and password needed to log into Jenkins. The SSH command is on the server launch page under the **Remote Access** section. You will need to paste the supplied command into your bash shell. This will log you in. Now to find the username and password.
```
cat jenkins/env/JENKINS_USERNAME
cat jenkins/env/JENKINS_PASSWORD
```
Now you can use the url to access the Jenkins server and log in.
