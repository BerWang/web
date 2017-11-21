
# Using Apache Kafka in the Shell

The standard install of Kafka includes commandline tools to build **consumers** and **producers**.

This has been tested on MacOS.

Installing Kafka
```shell
$ brew install kafka
```

Start by running the Kafka server.
```shell
$ zkserver start
$ cd /usr/local/Cellar/kafka/0.10.1.0/bin
$ kafka-server-start /usr/local/etc/kafka/server.properties
```
Now we can create a consumer to listen for messages. Run the command in a new terminal window:
```shell
$ kafka-console-consumer --zookeeper localhost:2181 --topic test --from-beginning
```

Finally we create the producer which will allow us to send messages. Run this command in a third terminal window.
```shell
$ kafka-console-producer --broker-list localhost:9092 --topic test
```
You can type in messages which get printed out by the _consumer_.
