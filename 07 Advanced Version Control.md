
# Advanced Version Control

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1JmtlJWZy5Y5pFhDoggkLzaCSrbSa3plBh105nZtU2qA).

In this worksheet you will be learning about some of the more powerful features of the Git version control system as well as the additional functionality offered by Git remote hosting sites such as **GitHub** and **GitLab**.

----

This will be your team's second sprint and you will need to apply all the skills and knowledge you have been shown so far.

## Pre-Sprint Preparation

By now you should have some working code. Before you start the second sprint work together to make sure each developer has a complete development environment set up on their computer for all parts of the project and that the work that has already been completed will fully run on all the development computers and that everyone has access to all remote repositories.

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
    3. Add them to the left column of your Kanban board (leave any uncompleted tasks from the first sprint in place).
    4. Draw up a fresh burndown chart for the current sprint.
    5. Run the complete suite of automated acceptance tests noting that those for the current sprint will fail.

## Conducting the Sprint

During this second sprint, your development team will need to meet every morning. At each meeting.

1. Review the burndown chart to see if the team are ahead or behind schedule
2. Now each member:
    1. Runs the **acceptance test suite** to explain what they have achieved since the last daily standup meeting.
    2. uses the Kanban board to identify the tasks they will work on until the next meeting (tomorrow), flags with the team responsible and moves these forward on the board.
    3. Describes any technical challenges that are holding back development work.

If any problems were identified during the standup these will need to be resolved by the appropriate team immediately after the daily standup. Make sure the resolution is explained to the _Scrum Master_ before continuing work.

Now each team have tasks assigned and will need to implement these before the next daily standup.

## Daily Routine

In this sprint you will be focussing far more on the daily routine. Make sure you stick to this on each day in the sprint.

1. All work to be carried out in pairs (pair programming).
2. Development for each user story should be done on its own branch.
3. Only the **Scrum Master** is authorised to merge branches back into the master.
    1. The scenarios in the acceptance test `.feature` file should all run without any errors.
    2. The code base should be checked for readability and coding standards.
4. The code in the master branch should be checked periodically to ensure that it is stable and runs without errors.

## Review Meeting

You will be given a date for the review meeting, this will typically be a week after the start of the sprint. During this meeting you will be expected to do a local demo of the software you built during the sprint so make sure you are prepared.

1. The **Product Owner** reads the user story/storys completed during the sprint.
2. The **Scrum Master** runs the complete suite of acceptance tests to show what has been achieved.
3. The **Scrum Master** manually demonstrates the new features to the client to get sign-off.
3. Any bugs identified are added to the Kanban board to be addressed in the next sprint.

The team then move on to the next _sprint planning meeting_ whilst the client is present.

## Retrospective

Each week the development team should meet up (without the client) and ask each member of the team to identify:

1. What they should continue to do (existing good practice)
2. What they should **start** doing (new good practice)
2. What they should **stop** doing (eliminiate bad practices)
