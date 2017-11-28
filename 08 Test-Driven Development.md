
# Test-Driven Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/NB6mHK.

You have already completed two sprints and this week you will be completing a third which will focus on applying the principles of **test-driven development**. The number of tasks you will be carrying out is growing each sprint. Some of these are the same as you have done in previous sprints and these will become embedded but some of the tasks are new to this sprint so make sure you learn the steps carefully.

## Pre-Sprint Planning

By now you should have some working code. Before you start the second sprint work together to make sure each developer has a complete development environment set up on their computer for all parts of the project and that the work that has already been completed will fully run on all the development computers and that everyone has access to all remote repositories.

You should also ensure that _unit tests_ have been implemented for all parts of the business logic and that you have an up to date code coverage report.

## Sprint Planning

As a team:

1. Choose a person in your team to act as the **Scrum Master** and as the **Product Owner**.
2. With the client present, discuss the remaining stories on the user story map:
    1. Remove any stories that are no longer relevent.
    2. Add user stories to reflect additional functionality identified by the client.
3. re-prioritise the user stories by moving them up or down the user story map.
4. Identify what can be achieved in the next sprint and draw a horizontal line across the user story map to clearly identify this.
5. Take each of these user stories and, with the client present:
    1. The product owner describes it from the user's perspective
    2. The team and client discuss how it can be implemented and work collaboratively on a whiteboard/flipchart to define it's UI until the client/product owner is satisfied/
    3. Add enough _scenarios_ to the `.feature` files to clearly define the tests that will be necessary to indicate it has been completed successfully.
6. Once the client has left:
    1. Break the story into the component tasks and write these on sticky notes.
    2. Use planning poker to estimate how many hours each task will take.
    3. Create a new Kanban board with 7 columns:
        1. To Do
        2. Plan
        3. Write Tests
        4. Implement
        5. Refactor
        6. Regression
        7. Done
    4. Add them to the left column of your Kanban board (leave any uncompleted tasks from the first sprint in place in their appropriate column).
    5. Draw up a fresh burndown chart for the current sprint.
    6. Run the complete suite of automated acceptance tests noting that those for the current sprint will fail.

## Conducting the Sprint

During this third sprint, your development team will need to meet every morning. At each meeting.

1. Review the burndown chart to see if the team are ahead or behind schedule
2. Now each member:
    1. Runs the **acceptance test suite** and **unit test suite** to explain what they have achieved since the last daily standup meeting.
    2. uses the Kanban board to identify the tasks they will work on until the next meeting (tomorrow), flags with the team responsible and moves these forward on the board.
    3. Describes any technical challenges that are holding back development work.

If any problems were identified during the standup these will need to be resolved by the appropriate team immediately after the daily standup. Make sure the resolution is explained to the _Scrum Master_ before continuing work.

Now each team have tasks assigned and will need to implement these before the next daily standup.

## Daily Routine

In this sprint you will be focussing far more on the daily routine. Make sure you stick to this on each day in the sprint.

1. All work to be carried out in pairs (pair programming).
2. Development for each user story should be done on its own branch.
3. Each team should write **unit tests** to define the functionality they will be implementing. There are two possible ways to organise this to avoid blind spots:
    1. In a small team, pair programming can be used.
    2. In a larger team, each pair of programmers can write the tests suite to be implemented by a different team.
3. Only the **Scrum Master** is authorised to merge branches back into the master.
    1. The scenarios in the **acceptance test** `.feature` file should all run without any errors.
    2. The **unit test suite** should run without errors.
    3. The **code coverage report** should be generated to check for gaps in the test suite.
    2. The **linter** should be run to ensure all code is maintainable and readability and adheres to coding standards.
4. The code in the master branch should be checked periodically to ensure that it is stable and runs without errors.
