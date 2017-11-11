
# Test-Driven Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/htYjXD

## Acruing Knowledge

As you begin each sprint you should aim to apply more of the knowledge and skills covered in the lectures. For this sprint you will need to include:

1. The sprint planning and review meetings
2. The daily standups
3. Pair programming
4. Version control including a good branching strategy

You will also be implementing acceptance testing at one of three levels:

1. You should work with a DSL to define your tests
2. You should use an appropriate framework to define these as automated tests
3. Finally, you should attempt to write step-definitions to automatically convert the tests written in a DSL to automated tests.

## Unit Testing

It is assumed that you already know how to write unit tests for your chosen language however there are some working examples in this repository which you can use as a starting point if your skills are a bit rusty! You have already refactored your code to identify the business logic model and it is this code you will be writing the unit tests for.

Your first step is to write a series of unit tests for the code you have already created. Don't start this until you have implemented the MVC design pattern.

1. Write a suite of tests to demonstrate the code you have written works as expected.
2. Run code coverage tools to check that there are no gaps in the test suite.

You now have a complete set of **regression tests**. As you continue to develop your product you should run all these tests to make sure that nothing has broken.

## Sprint Planning

You will have already completed the _sprint review_ so you need to _invited your client_ and carry out a detailed _sprint planning meeting_.

1. The client and developers use the Kanban board to identify any issues in the sprint backlog that were not completed:
  1. Issues are added to the issue tracker in GitHub.
  2. These issues are added to the sprint backlog column on the Kanban board.
2. The client and developers update the _User Story Map_:
  1. Change the story priority based on the client's current requirements.
  2. Decide what will be included in the next sprint.
3. A new `.feature` file is created for each user story in the new sprint and the team work with the customer to write the scenarios and steps.
4. The Kanban board is updated with the user stories from the new sprint.
5. The step definition file is updated to cover the new scenario steps.

## The Sprint

During this sprint, try to implement each of the _scenarios_ as an automated acceptance test. By the end of the sprint you should have one test per scenario and all the tests should have passed.

## Test-Driven Development

Before trying to solve the next user story take time to learn the process of **Test-Driven Development** (TDD).

1. Create a feature branch for the user story.
2. Decide how you will update the model to implement the new user story.
3. Write _code stubs_ for each additional function/method
4. Write a suite of unit tests to define the functionality
5. Run these tests, they should fail
6. Start your feature development.
7. Re-run your test suite regularly to check what still needs to be implemented.

In this sprint you will be applying not only the new unit testing skills but should aim to apply the skills and concepts covered in earlier weeks.
