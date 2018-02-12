
# Automated Testing

In this worksheet you will be concluding your first sprint and learning about how automated tests can improve the quality of your code. You should refer to the [lecture slides](https://goo.gl/VHD2SH).

## 1 Review Meeting

You will be given a date for the review meeting, this will typically be a week after the start of the sprint. During this meeting you will be expected to do a local demo of the software you built during the sprint so make sure you are prepared.

1. The **Product Owner** reads the user story/storys completed during the sprint.
2. The **Scrum Master** demonstrates the new features to the client.
3. Any bugs identified are added to the Kanban board to be addressed in the next sprint.

The team then move on to the next _sprint planning meeting_ whilst the client is present.

## 2 Retrospective

Each week the development team should meet up (without the client) and ask each member of the team to identify:

1. What they should continue to do (existing good practice)
2. What they should **start** doing (new good practice)
3. What they should **stop** doing (eliminiate bad practices)

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1xy3MWh96JUdI8DiAtOUFznA0aEf4FBzp8zbIrPBtTdw).

In this worksheet you will be critically reviewing the code your team have written and creating a suite of automated tests to ensure this is maintained to a high standard. Because these tests are directly checking your source code there are different tools for each language.

To help you complete the labs, there are working examples for different languages in the `exercises/05_code_quality/` directory.

## 3 Unit Testing

If you have never done unit testing you should take time to complete the [Testing Your Code](https://www.codecademy.com/courses/testing-your-code) exercises on [Codeacademy](https://www.codecademy.com).

### 3.1 Modularising Your Code

It is vital that you provide a comprehensive suite of tests for your existing code. but before you can write effective unit tests you need to ensure that your code is split into a number of independent units. Each module:

1. Should not be dependent on any other module you have written (you can have dependencies to third-part modules).
2. Should contain code that shares a similar function.

```
╔═════╗          ╔═════╗          ╔═════╗    In this example the code in modules (A), (B) and (C)
║  A  ║          ║  B  ║          ║  C  ║    is not dependent on any of the other modules and so
╚══╤══╝          ╚══╤══╝          ╚══╤══╝    we can write unit tests for them.
   │                │                │
   │                │                │       Module (D) imports the other three modules and so
   │             ┌──┴──┐             │       we can't include this module in our unit tests.
   └───────────→─┤  D  ├─←───────────┘
                 └─────┘
```

Take time to tidy up your code ready for the next step. How much of the code can you isolate in code modules and unit test? Ideally all your code (embedded, API and client(s)) needs to be modularised.

### 3.2 Writing Unit Tests

You should now create a separate test suite for each of these code modules. The test suites are written in the same language as the code you are testing. There are unit testing suites available for all mainstream languages, use the examples in the `exercises/05_code_quality/05_unit/` directory to get you started. Whatever language you are testing:

1. All unit tests should be kept together in a directory (typically named `spec/`).
2. Each code module should have its own test file that includes the name of the module in the format `unit-xxxx.xx`.
3. Each function/method in each module/class needs several tests:
    1. using valid data
    2. using threshold data
    3. using invalid data
4. Make sure all the tests pass at 100%

There are examples of unit tests for multiple languages in the `/exercises/07_unit/` directory on GitHub.

#### 3.2.1 Unit Testing Microcontroller Code

One special case is writing and executing unit test on code that will eventually run on a microcontroller. There are two approaches that you should investigate and reflect on in your report:

1. Arduino _libraries_ are written in standard C++ so, if there are no dependencies on Arduino-specific libraries you can write your unit tests using a standard testing framework. There is more information in the `exercises/05_code_quality/05_unit/cpp/` directory.
2. If you are using _Arduino-specific libaries_ you may need to test your code using an **Atmel emulator**. Again, there is more information in the same directory.

## 4 Integration Testing

Although you now have a suite of unit tests for the isolated mode modules/classes, there are some code modules/units/files that are not currently being tested. This could be for one of two reasons:

1. They import other modules/classes.
2. They don't contains methods/functions that are _testable_ in that they don't return data (perhaps they send information to the web browser directly or return API data).

it is quite possible to write tests for case (1) but, rather than testing the isolated module they are testing whether the module integrates with the rest of the modules (rather like testing the plumbing). We call these **integration tests** and they are written using the same tools as unit tests even though they serve a different purpose.

```
┌─────┐          ┌─────┐          ┌─────┐    In this example the code in modules (A), (B) and (C)
│  A  │          │  B  │          │  C  │    has already been tested using our *unit tests*.
└──┬──┘          └──┬──┘          └──┬──┘
   │                │                │       Since all the isolated business logic is in these
   │                │                │       modules, the purpose of module (D) is to import
   │             ╔══╧══╗             │       and integrate the functions/methods in the other
   └───────────→─╢  D  ╟─←───────────┘       3 modules. We therefore write integration tests
                 ╚═════╝                     for module (D).
```

1. Create a testing suite for your integration module(s). These need to be saved in the same directory as your unit tests but add a different prefix, eg: `integration-xxxx.xx`.
2. Write a comprehensive suite of tests to make sure the functions from the other modules are working correctly together.

## 5 Code Coverage

In the previous two sections you were told to write a _comprehensive suite of tests_, but what is _comprehensive_? Our test suite should check every: function, branch and line of code. To ensure this has been achieved we need to run a code coverage tool that will generate data to indicate how comprehensive our testing suites really are.

1. Using an appropriate _code coverage tool_, generate a coverage report that includes both the unit and integration tests.
2. You will probably have one or more modules that are _untestable_ because they don't return data to test. You should tell the code coverage tool to **ignore** these (but make sure you don't ignore too many!).
3. Use the _code coverage report_ to identify where the gaps are in your test suite and write additional tests until you score 100%.

## 6 The TAP Protocol

Now modify the output of your tests to generate data that follows the _TAP Protocol_. Once you have achieved this, pipe this data into a number of different **reporters** to generate the tests report as a web page and json file. Are there any other reporters that could be useful?
