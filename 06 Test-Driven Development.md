
# Test-Driven Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1mqtXeAPd0uhShlDuvd4G25thJHE-AdHOEB-qwf-anB8).

In your first sprint we focussed on the **Scrum Metholology**. In this second sprint we will continue using _Scrum_ but will now integrate the skills, tools and techniques we learned last week into a concept called **Test-Driven Development** (TDD).

For this to work you need a modularised code base for each aspect of your product with all code covered by comprehensive unit and integration tests with 100% coverage. If this is not the case, go back to last week's lab worksheet and complete these exercises.

## 1 Sprint Planning

As a team:

1. Choose a person in your team to act as the **Scrum Master** and as the **Product Owner**.
2. With the client present, discuss the remaining stories on the user story map:
    1. Remove any stories that are no longer relevent.
    2. Add user stories to reflect any additional functionality identified by the client.
3. re-prioritise the user stories by moving them up or down the user story map.
4. Identify what can be achieved in the next sprint and draw a horizontal line across the user story map to clearly identify this.
5. Take each of these user stories and, with the client present:
    1. The product owner describes it from the user's perspective
    2. The team and client discuss how it can be implemented and work collaboratively on a whiteboard/flipchart to define it's UI until the client/product owner is satisfied/
6. Once the client has left:
    1. Break the story into the component tasks and write these on sticky notes.
    2. Use planning poker to estimate how many hours each task will take (split any tasks that you estimate will take more than 4 hours).
    3. Create a new Kanban board with 5 columns: to do, write tests, implementation, refactoring, done.
    4. Move any tasks you didn't complete in the first sprint onto this new board.
    5. Add the new tasks for this sprint to the left column of your new Kanban board.
    6. Draw up a fresh burndown chart for the current sprint.
```
╔════════════════╦════════════════╦════════════════╦════════════════╦════════════════╗
║ To Do          ║ Write Tests    ║ Implementation ║ Refactoring    ║ Done           ║
╟────────────────╫────────────────╫────────────────╫────────────────╫────────────────╢
║   ┌────────┐   ║                ║   ┌────────┐   ║                ║                ║
║   │        │   ║                ║   │        │   ║                ║                ║
║   └────────┘   ║                ║   └────────┘   ║                ║                ║
║   ┌────────┐   ║                ║                ║                ║                ║
║   │        │   ║                ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║                ║
║   ┌────────┐   ║                ║                ║                ║                ║
║   │        │   ║                ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║                ║
╚════════════════╩════════════════╩════════════════╩════════════════╩════════════════╝
In the example above note that one of the tasks from the previous sprint had been 
started but was not completed. It has remained in the implementation stage.

The new tasks for the current sprint have been added into the first column.
```

## 2 Conducting the Sprint

In this second sprint you will be adopting some additional agile concepts:

1. Feature branches (each task on the Kanban board should be developed in its own branch).
2. Test-driven development (each task should be defined as a set of tests that should be written **before** implementing the feature).
3. Pair programming (during the sprint, each member of the team should spend at least 2 days working with another member of the team using the _pair programming_ technique).

These extra skills will initially _slow your development process down_ as you get to grips with them however eventually you will see improvements both in the _velocity of development_ and in the _overall quality of the code_ your team are producing.

## 3 Conducting the Sprint

The overall development this week will still be using the Scrum methodology however by implementing feature branches, TDD and pair programming there are some additional steps.

### 3.1 Daily Standup Meeting

Your development team will still need to carry out a **Daily Standup meeting** every morning. Before this meeting, the _Scrum Master_ should:

1. Check the _Kanban board_ is up to date.
1. add up the hours for all the tasks remaining incomplete on the Kanban board and using this to update the _Burndown Chart_.

The Scrum Master needs to make sure everyone is engaged in the process. Adopt the following policy:

1. Everyone should be there at the agreed time. Anyone delayed must phone the Scrum Master and the meeting postponed until they are there.
2. Everyone should be standing around the information radiators (whiteboard/flipchart).
3. Phones stay in pockets. meeting paused if anyone uses a phone (they are not focussed).
4. Laptops only to be used to demonstrate functionality.

During the meeting:

1. The Scrum Master reviews the burndown chart and tells the team whether they are ahead or behind schedule:
2. Now each member:
    1. explains what they have achieved since the last daily standup meeting, running the  **acceptance test suite** and **unit test suite** to demonstrate this.
    2. uses the Kanban board to identify the tasks they will work on until the next meeting (tomorrow), flags with the team responsible and moves these forward on the board.
    3. Describes any technical challenges that are holding back development work.

If any problems were identified during the standup these will need to be resolved by the appropriate team immediately **after** the daily standup. Make sure the resolution is explained to the _Scrum Master_ before continuing work.

Now each team have tasks assigned and will need to implement these before the next daily standup.

### 3.2 Development Process

Once the tasks have been agreed the teams should immediately start working on them. The process is much more structured than the one used in the previous sprint. Make sure you follow each step carefully:

1. A local feature branch is created if the task is new. This should be given a logical name such as `feature-xxx`.
2. This new branch should be _pushed_ to the remote so it can be seen by the rest of the team.
3. Everyone working on the feature should pull the branch and switch to it.
4. A set of **unit tests** and **integration tests** should be written to define the new functionality.
5. Now code should be written to pass the tests making sure all the **non-functional tests** such as the _linter_ and _code duplication checker_ still pass.
6. Once the unit and integration tests pass and the code in the branch adheres to the defined non-functional tests, it will need to be tidied up (refactored). Keep running the tests to make sure the refactoring doesn't break the code.
7. Now the branch can be merged into the master branch:
    1. Switch to the master branch.
    2. Merge the feature branch into the master branch.
    3. Delete the feature branch.

## 4 Review Meeting

You will be given a date for the review meeting, this will typically be a week after the start of the sprint. During this meeting you will be expected to do a local demo of the software you built during the sprint so make sure you are prepared.

1. The **Product Owner** reads the user story/storys completed during the sprint.
2. The **Scrum Master** demonstrates the new features to the client.
3. Any bugs identified are added to the Kanban board to be addressed in the next sprint.

The team then move on to the next _sprint planning meeting_ whilst the client is present.

## 5 Retrospective

Each week the development team should meet up (without the client) and ask each member of the team to identify:

1. What they should continue to do (existing good practice)
2. What they should **start** doing (new good practice)
2. What they should **stop** doing (eliminiate bad practices)
