
# Building Websites to Subscribe to MQTT Data

This worksheet builds on the **Publish Subscribe** one. Make sure you have finished this before starting. In this worksheet you will learn how to use the TDD methodology to develop websites that subscribe to MQTT brokers. You can find the exercise files in the `02_mqtt_javascript/` directory.

## 1 Basic MQTT Client

In this first exercise you will learn the basics of how to create a website that can subscribe to data from an MQTT broker. It will focus on writing JavaScript code that runs _inside the browser_. Open the `chat/` directory where you will see three files plus a directory.

1. The `index.html` is the main webpage the user will see. You should open this in the browser to run the web app.
    1. It contains links to the **hivemq mqtt library** to allow the page to publish and subscribe.
    2. It links to the `module.js` script which contains our MVC Model.
    3. It links to the `mqtt.js` script that interacts with the html _view_ and JavaScript _model_.
        1. This is the MVC Controller and uses the `Messaging` object imported from the hivemq library to handle publishing to and subscribing from an MQTT broker which it does by creating a `client` object on line 6. This contains a number of properties that we can use to store anonymous functions, these will be triggered by different events, the most important being `onMessageArrived`. This property is assigned a function that gets triggered every time a new MQTT message arrives. This makes use of the functions in our model.
        2. At the bottom of the script we create an event listener that will get triggered once the html (the DOM) has been downloaded. This adds an event handler to the textbox that triggers each time a key on the keyboard is released. If the key is the enter key it retrieves the text in the textbox and passes it to the `publish()` function.
        3. The `publish()` function uses the `Messaging` object in the hivemq library to create a new `Message` object which is sent to the MQTT broker.
2. The `test/` directory contains the unit tests for our **MVC Model**.
    1. The `testrunner.html` runs the tests in the browser using the Jasmine 2 testing framework, you should open this file in your web browser.
    2. The `module.test.js` script contains the unit tests for the `module.js` script.

As you can see you have a working website that conforms to the MVC design pattern plus a complete suite of unit tests that cover the model (business logic).

### 1.1 Immediately-Invoked Function Expressions

We are primarily concerned with writing tests for our _model_ (`module.js`) Open the file now and make sure you understand how it works.

All variables in modern JavaScript are _function-scoped_, this means they are only accessible in the function they were declared in. Any variables defined outside a function have global scope. In our model we have an array to hold the messages which should not be directly accessed. To solve this we place the array declaration in an [anonymous function](http://helephant.com/2008/08/23/javascript-anonymous-functions/) which is stored in the `messages` constant.

We obviously want any properties and methods we define to be able to see this array and so these need to be defined _in the same function_. Unfortunately any functions defined inside the main function will also not be accessible externally however remember we can return data from a function by using the `return` statement. In this example we return an object containing all the functions and properties we want to be able to call!

To be able to access any of this we need to execute the function. To run a function we add a pair of parentheses at the end `()` and so by adding this to the end of the function expression it is immediately executed, hence the term **Immediately Executed Function Expression** or IIFE for short. Since all the data in a model should be private it is expected that any model you create will need to be defined as an IIFE.

Take time to go through the code carefully so you fully understand how IIFEs work. If you decide to search online for additional resources (and you should) be aware that IIFEs used to be called **Function Closures** or Closures for short.

### 1.2 TDD First Iteration

Try leaving the text field blank then clicking on the button, what happens? Clearly we need to make changes to the model. The most obvious solution is to modify the `extractData()` function to throw an error if the message is a blank string. Although we are using the [Jasmine](https://jasmine.github.io) testing tools, these work in a very similar way to the [Jest](https://jestjs.io) tools. Open the `test/module.test.js` script and study it carefully noting that the tests have been placed in nested groups.

#### 1.2.1 Write a Failing Test

The first step is to define the functionality we want in the form of a test. Clearly we need to throw an error rather than simply add a blank item to the list. Since we are testing the add() function we need to add an extra test to this section of the suite. Locate the `extractData` tests which are grouped in the `method` group. Add the following test:

```javascript
it('empty string parameter should throw an error', () => {
	try {
		messages.extractData('')
		expect(1).toBe(0) // this line should not be run!
	} catch(err) {
		expect(err.message).toBe('empty string parameter')
	}
})
```

Notice that if the `extractData()` function does not throw an error it runs the next line which obviously fails. This means that we can flag if the error is not thrown. Run the unit test suite, the new test should fail, this is the first step.

#### 1.2.2 Write Code to Pass the Test

Your next step is to modify the `extractData()` function until all the tests pass. There is a solution below but see if you can do it without looking!

```javascript
extractData: payloadString => {
    if(payloadString.length === 0) {
        throw new Error('empty string parameter')
    }
    return payloadString
}
```

#### 1.2.3 Refactor the Code

The third and final step is to tidy up the code ensuring all the tests still pass. In this example there is only one line in the if statement block so we can reduce it to a single line as shown.

```javascript
extractData: payloadString => {
    if(payloadString.length === 0) throw new Error('empty string parameter')
    return payloadString
}
```

Run the test suite again to make sure all the tests pass. You have now completed your first TDD iteration.

### 1.3 TDD Second Iteration

Try adding a message that only includes spaces, what happens? Use the TDD methodology to fix this bug (hint: try using the [`String.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) command).

## 1.4 Test Your Understanding

The current webpage has very limited functionality, only displaying the last message with no additional information. Use a TDD methodology to make the following improvements:

1. change the topic, replacing the /cu segment with the chosen username.
2. store all the messages in the array rather than the last one by modifying the `addMessage()` function.
3. display the message thread in a table by modifying the `buildHTML()` function.
4. change the payload to an object containing the sender's username, message and the date/time and modify the `extractData()` function to return an object containing the three values.
    You will also need to modify the `buildHTML()` function to avoid breaking your code.
5. Modify the `buildHTML()` function to:
    1. display the name of the sender in a second column in the table.
    2. display the date/time in a third column in the table.

## 2 Maps

The third and final topic will show you how we can use the data to place markers on Google Maps.

[LatLon](https://www.latlong.net/)

```
mosquitto_pub -h broker.mqttdashboard.com -t cov/map -m '{"lat": 52.4082, "lon": -1.5071, "label": "cathedral"}'
```

| Location               | Lat     | Lon     |
| ---------------------- | ------: | ------: |
| Godiva Statue          | 52.4080 | -1.5104 |
| Frank Whittle Building | 52.4053 | -1.4998 |
| Police Station         | 52.4045 | -1.5084 |
| Coventry College       | 52.4140 | -1.5038 |
| University Hospital    | 52.4213 | -1.4416 |

need to create an array of markers to manage them.

The `test/` directory contains a suite of tests to cover the code in the IIFE that you will find in the `module.js` script. Try running the tests, note that they all pass.

### 2.1 TDD First Iteration

need to handle incomplete data in the JSON string... missing label property.

#### 2.1.1 Write a Failing Test

By now you should be confortable with the TDD process. Let's add a third test for the `extractData` function. The following test should work:

```javascript
it('throws exception if label property missing', () => {
  try {
    const str = '{"lat": 52.4082, "lon": -1.5071}'
    maps.extractData(str)
    expect(0).toBe(1) // this line should not run!
  } catch(err) {
    expect(err.message).toBe('Error: missing label property')
  }
})
```

Add this new test and use the testrunner to run the test suite. The test should fail with the message `Expected 0 to be 1` which shows that the error is not being thrown!

#### 2.1.2 Write Code to Pass the Test

Now we need to modify the `extractData()` function so that this new test passes (and we dont break any of the other tests!). Try the following:

```javascript
extractData: payloadString => {
  try {
    const data = JSON.parse(payloadString)
      if(data.label === undefined) {
        throw new Error('missing label property')
      }
    return data
  } catch(err) {
    if(err.message === 'Unexpected token h in JSON at position 0') {
      throw new Error('parameter is not a json string')
    }
	throw new Error(err) // we need to propagate all other errors
  }
}
```

Run the test suite again to check that all the tests now pass.

#### 2.1.3 Refactor the Code

The third and final step in TDD is to refactor (tidy) the code, ensuring that the tests still pass. We can simplify the code by removing the brackets from single line `if` statements and clean up some of the conditionals.

```javascript
try {
  const data = JSON.parse(payloadString)
  if(!data.label) throw new Error('missing label property')
  return data
} catch(err) {
  if(err.message === 'Unexpected token h in JSON at position 0') {
    throw new Error('parameter is not a json string')
  }
  throw new Error(err) // we need to propagate all other errors
}
```

Make sure all the tests still pass before marking this task as complete.

### 2.2 TDD Second (and third) Iteration

Try modifying the script to handle a missing lat or lon property (note this will take two TDD iterations).

### 2.3 Test Your Understanding

The sample code demonstrates a simple map with multiple pins. You should now modify this to track buses around Coventry:

1. Modify the `extractData()` function to accept and validate two additional pieces of data:
    1. `route` which is a number representing the bus route
    2. `reg` which should contain the vehicle registration number
2. Display both the route and reg number in the marker label.
3. Each `reg` should appear only once on the map:
    1. If the vehicle appears for the first time add a new pin.
    2. When the same vehicle updates its position you should replace the existing pin.
4. instead of using the generic marker you should instead use the following bus symbol as a [custom marker](https://developers.google.com/maps/documentation/javascript/custom-markers). Hint: add another property called `icon` whem you create a new `Marker`.

![bus icon](exercises/.images/bus.png)
