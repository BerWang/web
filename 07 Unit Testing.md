
# Unit Testing

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/Wf8HZv

## Learning About Unit Testing

If you have never done unit testing you should take time to complete the [Testing Your Code](https://www.codecademy.com/courses/testing-your-code) exercises on [Codeacademy](https://www.codecademy.com).

## Modularising Your Code

It is vital that you provide a comprehensive suite of tests for your existing code. but before you can write effective unit tests you need to ensure that your code is split into a number of independent units. Each module:

1. Should not be dependent on any other modules.
2. Should contain code that shares a similar function.

Take time to tidy up your code ready for the next step.

## Writing Unit Tests

You should now create a separate test suite for each of these code modules. Make sure you use a sensible naming convention.

Now your team needs to write a set of comprehensive tests for each of these modules. Split the work between the team members, remembering that you should be writing tests for both the server (API) and the code in the client (app or website).

There are examples of unit tests for multiple languages in the `/exercises/07_unit/` directory on GitHub.

## Code Coverage

Once you have written the tests, run the code coverage tool on your chosen platform which will identify any code that is not being tested. You should now aim to get 100% code coverage by writing additional tests.

## The TAP Protocol

Now modify the output of your tests to generate data that follows the _TAP Protocol_. Once you have achieved this, pipe this data into a number of different **reporters** to generate the tests report as a web page and json file. Are there any other reporters that could be useful?

## Integration Testing

Now that you have a suite of unit tests with good code coverage it is time to write integration tests. These will test the interaction between the modules of code and other external systems such as APIs and databases. These tests will check that the whole system works as expected with messages being passed between the different modules.

## Software Complexity Analysis

The final step is to generate a report into the relative complexity of different parts of your system.

1. Identify the parts that have a relatively high complexity and find ways to refactor your code to reduce these.
2. Keep a record of the complexity score and use this to identify where changes have increased the complexity of a module. This may indicate poor architecture or code.
