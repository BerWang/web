
# Unit Testing

It is vital that you provide a comprehensive suite of tests for your existing code.

## Modularising Your Code

Before you can write effective unit tests you need to ensure that your code is split into a number of independent units. Each module:

1. Should not be dependent on any other modules.
2. Should contain code that shares a similar function.

Take time to tidy up your code ready for the next step.

## Writing Unit Tests

You should now create a separate test suite for each of these code modules. Make sure you use a sensible naming convention.

Now your team needs to write a set of comprehensive tests for each of these modules. Split the work between the team members, remembering that you should be writing tests for both the server (API) and the code in the client (app or website).

## Code Coverage

Once you have written the tests, run the code coverage tool which will identify any code that is not being tested. You should now aim to get 100% code coverage by writing additional tests.

## The TAP Protocol

The final step is to modify the output of your tests to generate data that follows the _TAP Protocol_. Once you have achieved this, pipe this data into a number of different **reporters** to generate the tests report as a web page and json file. Are there any other reporters that could be useful?
