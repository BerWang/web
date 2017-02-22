
# Test-Driven Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/Ztcjd1

## Application Architecture

Before you can write unit tests you need to ensure the application architecture supports this. This normally means applying the **Model-View-Controller** design pattern. Many modern platforms such as iOS and Android support this out of the box.

1. **Model**: this is where you create and maintain the business logic for your application and it is this code that you will be writing unit tests for.
2. **View**: this is the public-facing interface for your application. It should not contain any business logic, its job is solely to accept user input and display information.
3. **Controller**: this acts as the _interface_ between the _Model_ and the _View_. It makes sense of the user input and calls upon the logic in the model to solve problems. It also takes the results of the model and sends it to the view. It must not contain any business logic.

If you keep this architecture in mind you should be able to tidy up your code ready for your _unit tests_.

## Unit Testing

It is assumed that you already know how to write unit tests for your chosen language however there are some working examples in this repository which you can use as a starting point if your skills are a bit rusty!

Your first step is to write a series of unit tests for the code you have already created. Don't start this until you have implemented the MVC design pattern.

1. You may need to re-design some of your application code to ensure there are clearly separate blocks of code that you can test.
2. Write a suite of tests to demonstrate the code you have written works as expected.
3. Run code coverage tools to check that there are no gaps in the test suite.

You now have a complete set of **regression tests**. As you continue to develop your product you should run all these tests to make sure that nothing has broken.

## Sprint Review

By this stage you have completed  first sprint and so you will need to hold a sprint review meeting. _Make sure you have invited your client_.

1. The team:
  1. displays the **documentation site** generated from the `.feature` files and recap the tasks that were agreed on during the previous meeting.
  2. demonstrate the product, showing that the agreed user story(s) have been completed and that the product is useful to the client.
2. The client gives feedback and may be in a position to sign off the work carried out so far.
3. The client and developers use the Kanban board to identify any issues in the sprint backlog that were not completed:
  1. Issues are added to the issue tracker in GitHub.
  2. These issues are added to the sprint backlog column on the Kanban board.
4. The client and developers update the _User Story Map_:
  1. Change the story priority based on the client's current requirements.
  2. Decide what will be included in the next sprint.
5. The Kanban board is updated with the user stories from the new sprint.


## Test-Driven Development

Before trying to solve the next user story take time to learn the process of **Test-Driven Development** (TDD).

1. Create a feature branch for the user story.
2. Add a new `.feature` file is created for the user story and the team work with the customer to write the scenarios and steps. At this stage the work with the customer is completed and they can leave.
3. Update the **Step Definition File(s)** to ensure all the scenario steps are covered.
4. Now run the acceptance test suite and ensure the new tests fail.
5. Decide how you will update the model to implement the new user story.
6. Write _code stubs_ for each additional function/method
7. Write a suite of unit tests to define the functionality
8. Run these tests, they should fail
9. Start your feature development.
10. Re-run your test suite regularly to check what still needs to be implemented.
