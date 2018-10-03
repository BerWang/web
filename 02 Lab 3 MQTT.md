# Publish Subscribe

Up to this point all the activities have been using the **HTTP Protocol**, which uses a _request-response_ process (the client requests a resource and the server responds with this resource). If this seems unfamiliar you should work through the HTTP Protocol worksheet.

Whilst this approach works fine for delivering content to a web browser it is not a useful approach for certain applications. Imagine a chat room where you had to refresh the page to view new messages.

In this worksheet you will learn how to use a new HTML5 **websocket** protocol that allows a full duplex (2 way) communication over a single TCP connection. We will then explore the **MQTT** protocol which can be run over websockets and is used to implement a _push message_ system, technically called _publish-subscribe_.

## 2 Set Up

Start by installing the [Mosquitto Tools](https://www.eclipse.org/mosquitto/download/).

If you are using MacOS you should install the [Brew Package Manager](https://brew.sh) and use this to install Mosquitto using `brew install mosquitto`.

If you are using Ubuntu you can install using`sudo apt install mosquitto`.

```
mosquitto_sub -h test.mosquitto.org -t "#" -v
```

If you are using Windows 10 you can download the 64 bit Binary exe and install.

## 1 The MQTT Protocol

Now we have the tools installed we can start using the protocol. You have installed 2 tools, `mosquitto_pub` is used to publish messages and `mosquitto_sub` subscribes to a channel. We will use the `test.mosquitto.org` broker.

Start by opening _two_ terminal windows:

In the first window we will run the `mosquitto_sub` command  and subscribe to a _topic_ called `302CEM/XXX` where `XXX` is your university username.

```shell
$ mosquitto_sub -h test.mosquitto.org -t 302CEM/XXX
```

1. The `-h` flag allows us to specify the _host_, in this case `test.mosquitto.org`.
2. The `-t` flag allows us to specify the _topic_, in this case `205CDE/XXX` (remember to substitute your username)

In the second terminal we will run the `mosquitto_pub` command to publish messages to our topic.

```shell
$ mosquitto_pub -h test.mosquitto.org -t 302CEM/XXX  -m 'hello world'
```

1. The `-h` flag allows us to specify the _host_, in this case `test.mosquitto.org`.
2. The `-t` flag allows us to specify the _topic_, in this case `205CDE/XXX` (remember to substitute your username)
3. The `-m` flag allows us to specify the _message_, in this case `hello world`.

If you look at the first terminal window (running `mosquitto_sub`) you should see your message displayed.

### 2.1 Test Your Understanding

Working in small groups of between 2 and 4 people:

1. Decide on the _topic name_ you will use.
2. Everyone runs the `mosquitto_sub` tool and subscribes to this same topic.
3. Each person launches a new terminal in a new pane (so you can see both terminal windows).
4. use the `mosquitto_pub` tool to send a message to your chosen _topic name_.
5. Look at the output of your `mosquitto_sub` command (in the first terminal window).

What have you produced? Can you think of any application for this...
