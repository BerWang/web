
# Acceptance Testing

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/Ufds2i

## Behaviour-Driven Development

Before starting your next sprint, revisit each of the completed _user stories_ and define each of them using a _business-readable DSL_ such as Gherkin. There is an example in the `exercises`

1. Create a `features/` directory.
2. Create a file with a `.feature` extension for each user story.
3. At the top of each of the files create a **feature** and add the user story.
4. Now define a number of **scenarios** to clearly and unambiguously define all the tests you need to carry out.
5. Under each scenario, list the steps required.
6. Finally you need to create a short _Javascript_ script called `testRunner.js` which will run the `gherkindoc` tool to generate your **documentation site**. This should be generated in the `docs/features/` directory which will allow you to view the website after pushing to **GitHub**.

## Executable Specifications

By now you should have a complete set of feature files that cover all the user stories you have developed so far. The next step is to convert these into _executable specifications_ using the **Cucumber** tool. This takes each _feature file_ and tries to run these against the software you are developing.

To achieve this you need to set up a series of step definitions that _translate_ lines in your _scenarios_ into automated steps that are carried out on your software. There are two decisions to be made:

1. What language will you use to write the step definitions? Although Cucumber was originally written in **Ruby** it has been ported to many other languages including Python, Java and Nodejs (JavaScript).
2. What driver will you use to allow the step definitions to interacti with your product. This will largely depend on the platform you are developing on:
    1. If you are developing a _web_ frontend you should probably stick to the **Selenium Web Driver**.
    2. If you are developing an _Android_ frontend you should try using the [Green Coffee](https://github.com/mauriciotogneri/green-coffee) library.
    3. If you are developing an _iOS_ frontend you should try [XCTest-Gherkin](https://cocoapods.org/pods/XCTest-Gherkin).
    
You can find some examples in the `exercises/05_acceptance/` directory.

## Acceptance Testing

At this stage you should have a full _suite_ of:

1. Gherkin feature files
2. A testrunner that converts these into executable specifications and runs them against your frontend.

Make sure that these are completed before continuing.

The final step is to write the _feature files_ for the user stories you will be completing _in the next sprint_.

1. Take each of the user stories and add a new `.feature` file for each.
2. Add the user story as a _feature_ to the files.
3. Define the success criteria by writing enough _scenarios_ to cover all eventualities.
4. You may need to tweak the _step definitions_.
5. Run the full test suite, the new scenarios should fail.

You are now ready to start the next sprint which will run all of next week.
