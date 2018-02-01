
# Code Quality

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

## 3 Non-Functional Requirements

Lets start by adding a suite of tests to improve the general code quality. These won't test how well the code solves the user stories.

### 3.1 Linting

It can be tough for development teams to format their code in a consistent way: naming of variables and constants, extra whitespace, irregular indentation, and other “sloppiness” then often leads to actual bugs in the program.

1. Install and run a suitable linter on the source code using its default settings.
    - what errors and warnings does it flag up?
    - are these easily fixable?
2. Can you find a plugin for your IDE so that the errors and warnings are flagged up in your editor?
    - install the plugin and make sure it is highlighting the errors and warnings.
3. Most linters are configurable through a settings file.
    1. Create a simple settings file and make sure it is being read when the linter runs.
    2. Review the rules that can be customised and, in your team, decide on the agreed set of rules.
    3. Now use the linter output to ensure your code adheres to these rules.

Whilst strictly not part of the _linting_ process, if you are using a _compiled language_ a good test is whether each source code file **compiles** correctly!

### 3.2 Code Duplication

The **Don't Repeat Yourself** (DRY) principle states that you should not have duplicate code scattered around your project as it makes it harder to find and fix bugs, but how can you check this?

There are tools for all main programming languages that can flag up duplicate code across an entire project.

1. Install a suitable tool that supports your language.
2. Run the tool using the default settings.
    - does it flag up any code duplication?
    - if so, can you locate this based on the information it provides?
    - can this duplication be removed?
3. Most code duplication tools can be customised either through flags or a configuration file.
    1. Look at the documentation and identify how to customise the tool.
    2. Change some settings (for example the min lines) and run the tool.
        - are the results more or less useful?
    3. As a team, decide on the settings you will be using and make sure they are used consistently for the remainder of the project.

### 3.3 Checking Dependencies

Every time you import a library/framework into your project it gets added to the codebase which means it takes longer to run the program and the size of the code increases. For this reason you should not be importing any dependency that you don't use.

There are dependency checkers for most languages that can flag any imported module/library/framework which is not used in the code.

1. Install a suitable tool that supports your language.
2. Run the tool and check any warnings/errors it generates.
3. Remove the unused modules/libraries/frameworks.
4. Run the tool again and repeat until no errors are reported.

In some languages, all dependencies have to be recorded in a configuration file such as `package.json` in the case of NodeJS scripts. In these cases, by using different flags, the tool can:

1. Identify any packages that are defined in config file and not used.
2. Identify any packages that are installed but not recorded in the config file.

If you are using a language that uses a config file you should run these two additional tests.

### 3.4 Profiling

Software profiling is a dynamic program analysis that measures, for example, the space (memory) or time complexity of a program, the usage of particular instructions, or the frequency and duration of function calls.

Profiling is normally used to improve program optimization and is achieved by instrumenting either the program source code or its binary executable using a tool called a **profiler**.

Most mainstream languages include a profiler:

1. Learn how the profiler works for your particular language, you may find some useful information in the `exercises/05_code_quality/04_profiling/` directory.
2. Activate the profiler.
3. Run your program.
    - If appropriate, use a tool such as Apache Bench to simulate a load on your system.
4. This should have generated a **tick file**.
    - use a suitable **tick interpreter** to analyse this data.
    - Does it reveal any useful information about your program?
5. Can you use this data to improve your program?

## 4 Functional Requirements

Now we have tested a range of _non-functional requirements_ its is time to write some tests to see if we have achieved the _functional requirements_.

### 4.1 Unit Testing

If you have never done unit testing you should take time to complete the [Testing Your Code](https://www.codecademy.com/courses/testing-your-code) exercises on [Codeacademy](https://www.codecademy.com).

#### 4.1.1 Modularising Your Code

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

#### 4.1.2 Writing Unit Tests

You should now create a separate test suite for each of these code modules. The test suites are written in the same language as the code you are testing. There are unit testing suites available for all mainstream languages, use the examples in the `exercises/05_code_quality/05_unit/` directory to get you started. Whatever language you are testing:

1. All unit tests should be kept together in a directory (typically named `spec/`).
2. Each code module should have its own test file that includes the name of the module in the format `unit-xxxx.xx`.
3. Each function/method in each module/class needs several tests:
    1. using valid data
    2. using threshold data
    3. using invalid data
4. Make sure all the tests pass at 100%

There are examples of unit tests for multiple languages in the `/exercises/07_unit/` directory on GitHub.

##### 4.1.2.1 Unit Testing Microcontroller Code

One special case is writing and executing unit test on code that will eventually run on a microcontroller. There are two approaches that you should investigate and reflect on in your report:

1. Arduino _libraries_ are written in standard C++ so, if there are no dependencies on Arduino-specific libraries you can write your unit tests using a standard testing framework. There is more information in the `exercises/05_code_quality/05_unit/cpp/` directory.
2. If you are using _Arduino-specific libaries_ you may need to test your code using an **Atmel emulator**. Again, there is more information in the same directory.

### 4.2 Integration Testing

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

### 4.3 Code Coverage

In the previous two sections you were told to write a _comprehensive suite of tests_, but what is _comprehensive_? Our test suite should check every: function, branch and line of code. To ensure this has been achieved we need to run a code coverage tool that will generate data to indicate how comprehensive our testing suites really are.

1. Using an appropriate _code coverage tool_, generate a coverage report that includes both the unit and integration tests.
2. You will probably have one or more modules that are _untestable_ because they don't return data to test. You should tell the code coverage tool to **ignore** these (but make sure you don't ignore too many!).
3. Use the _code coverage report_ to identify where the gaps are in your test suite and write additional tests until you score 100%.

### 4.4 The TAP Protocol

Now modify the output of your tests to generate data that follows the _TAP Protocol_. Once you have achieved this, pipe this data into a number of different **reporters** to generate the tests report as a web page and json file. Are there any other reporters that could be useful?

### 4.5 Software Complexity Analysis

The final step is to generate a report into the relative complexity of different parts of your system using the appropriate software complexity analysis tool for your chosen language.

1. Identify the parts that have a relatively high complexity and find ways to refactor your code to reduce these.
2. Keep a record of the complexity score and use this to identify where changes have increased the complexity of a module. This may indicate poor architecture or code.
