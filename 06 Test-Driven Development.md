
# Test-Driven Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1mqtXeAPd0uhShlDuvd4G25thJHE-AdHOEB-qwf-anB8).

In your first sprint we focussed on the **Scrum Metholology**. In this second sprint we will continue using _Scrum_ but will now integrate the skills, tools and techniques we learned last week into a concept called **Test-Driven Development** (TDD).

For this to work you need a modularised code base for each aspect of your product with all code covered by comprehensive unit and integration tests with 100% coverage. If this is not the case, go back to last week's lab worksheet and complete these exercises.

## 1 Configuring Pull Requests

In your first sprint you all had full access to the _Master Branch_ meaning anyone in the team could commit to it and merge branches into it. As you quickly discovered this caused a lot of problems. In this sprint your team will be making the master branch into a **protected branch**, restricting who can interact with it and how.

### 1.1 Permissions

The first step is to make sure that everyone in the team has been assigned the correct permission levels.

1. One person in each _sub-team_ (eg, API, iOS, etc.) should be the designated **Code Owner**.
2. There are four permission levels: Guest, Developer, Reporter, Master. Everyone in the team should have developer permission.
3. The designated **Code Owner** for each repository should be given **Master** permissions.

### 1.2 Protected Branches

1. In your GitLab repositories go to `Settings > Repository` and expand the **Protected Branches** section.
2. In the **Branch** dropdown list choose `master`.
3. In the **Allowed to merge** dropdown list choose 'Masters', this will prevent except _code owners) from merging any code into this branch.
4. In the **Allowed to push** dropdown list make sure that you choose `No one`, we don't want any code to be pushed directly into this branch.

## 2 Conducting the Sprint

In this second sprint you will be adopting some additional agile concepts:

1. Feature branches (each task on the Kanban board should be developed in its own branch).
2. Implement **Test-Driven Development**:
    1. Write a _test list_ to define the functionality.
    2. Convert these into unit tests.
    3. Write code to pass the tests.
    4. Refactor the code, ensuring all tests still pass.
3. Pair programming (during the sprint, each member of the team should spend at least 2 days working with another member of the team using the _pair programming_ technique).
4. Implement pull requests to merge the feature into the master branch:
    1. When a task has been completed (and the entire test suite passes) the developer should create a **pull request** (see below).
    2. The _pull request_ will need to be reviewed by the **Code Owner** who will need to merge the code into the **Master Branch**.

These extra skills will initially _slow your development process down_ as you get to grips with them however eventually you will see improvements both in the _velocity of development_ and in the _overall quality of the code_ your team are producing.

### 2.1 Creating a Pull/Merge Requests

This should be carried out only if the feature is complete and all the automated tests (functional and non-functional) pass.

1. Click on the **Merge Requests** tab.
2. Click on the **New merge request** button.
3. The _source branch_ is the feature branch and the _target branch_ should be the master branch.
4. Click on the **Compare branches and continue** button.
5. Review the changes at the bottom of the next screen.
6. Add a title and description to the merge request, this should explain the work that has been done.
7. Click on **Submit merge request**

### 2.2 Approving a Pull/Merge Request

All requests will need to be reviewed by the **Code Owner**.

1. The number of merge requests needing approval are shown on the **Merge Requests** tab.
2. Review the changes:
    1. Pull the branch.
    2. Review the changes (and run tests).
3. Check the **Remove source branch** box.
4. Click on the **Merge** button.

If the code is not ready for merging you should add a comment and send it back to the development team. If the code is far from ready you can **close** the merge request.

## 3 Daily Standup Meeting

Your development team will still need to carry out a **Daily Standup meeting** every morning. Before this meeting, the _Scrum Master_ should:

1. Check the _Kanban board_ is up to date.
2. add up the hours for all the tasks remaining incomplete on the Kanban board and using this to update the _Burndown Chart_.

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

### 3.1 Development Process

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
