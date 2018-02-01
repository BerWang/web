# Architecture

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1GUZTf_4yCVUBWiOS3ACQ8ngkEFak7mZy9lzYwDWePq0).

In this worksheet you will be carrying out the initial planning which needs to take place before the first _sprint_ which will be next week. This stage is often referred to as **sprint zero**.

## 1 Reviewing the CPD Plan

Back in the first lab each member of your team created a **continous professional development** (CPD) plan where they identified the skills they needed to learn before the first sprint. Since the first sprint starts next week its time to review each of the plans. Split into pairs (or groups of 3) and within each group, print out copies of the plans and go through them, checking off any parts that have been completed and agreeing a suitable date (and some resources) to ensure each member of the team is ready for the first sprint.

## 2 High-Level Architecture

There is a lot of planning to be carried out before you can start development. Using both your _Domain Model_ and _User Story Map_, start to plan the architecture of the product you will be developing. This architecture needs to be [evolutionary](https://www.thoughtworks.com/books/building-evolutionary-architectures) to allow for changes and support the agile development process you will be using. You should evaluate a number of architectural design patterns including:

1. publish-subscribe
2. model-view-controller
3. web apis

why is the _n-tier architecture_ poorly suited to agile development approaches?

## 2 Data Storage

Analyse the data storage requirements and decide:

1. What _type_ of database is best suited (relational, document, graph, etc.)
2. What database technology will be used (MySQL, Redis, Mongo, Neo4J, etc.)

## 3 Deciding on the Technology Stack

During this module you will be working in a team to develop a sophisticated suite of tools using a variety of different languages and platforms. It is assumed that you already have the required programming skills...

You should now choose ap appropriate technology stack, making sure you understand the key technologies such as Web APIs and MQTT. By this stage your team should have a clear idea as to what needs to be developed, time for an honest team discussion:

1. Are there any skills required to complete the project that need working on?
2. Are there any potential issues with building any parts of the product?
3. Identify the development platform
    1. What will be your primary development language?
    2. What frameworks will your team be using?
    3. Make sure you are comfortable with the mechanics of writing automated tests for your chosen language including testing async code and creating mocks:
        1. [UnitTest](https://docs.python.org/3/library/unittest.html) for Python
        2. [JUnit](http://junit.org) for Java
        3. [Jasmine](http://jasmine.github.io) for JavaScript
        4. Microsoft [Unit Test Framework](https://msdn.microsoft.com/en-us/library/hh598960.aspx) for .NET
        5. XCUnit for Swift

Any skills shortage should be added to the **Continuous Professional Development** (CDP) plans for the appropriate team members.

## 4 Team Organisation

Now you need to organise your team in preparation for the first sprint which will start next week. Base your discussions on the first sprint identified in the _User Story Map_:

1. Based on your skills audit, divide the team into different groups to tackle the different tiers in your solution.
2. Each group should map out how they will achieve the first user story, this should include:
    1. The language they will be using and why.
    2. The editor/IDE to be used.

## 5 Technical Preparation

1. setting up the development workstations:
    1. installing the software needed.
    2. building simple hello-world programs to check development environment is set up.
2. building and configuring any test servers and platforms
3. configuring GitHub:
    1. making sure everyone in the team can log in!
    2. creating a team in the correct organisation on GitHub.
    3. creating enough correctly named private repositories.
    4. adding the team to each of these so everyone has access to all project repositories.

Before next week you need to make sure the team have all the required skills and have hacked together some code to prove that everything is solveable.

## 6 GitLab

In previous modules you have been using the GitHub Enterprise repository within the University but there for this one you will be using [GitLab](https://gitlab.com). As part of this week's labs you should configure GitLab for your team so you are ready to start development next week.

1. Everyone needs to create accounts on the [GitLab](https://about.gitlab.com) server.
2. Upload a head and shoulders photo of yourself into your GitHub profile so that everyone knows who you are.
3. Each organisation should be set up as a [group](https://gitlab.com/dashboard/groups) which is used to organise your repositories, set one up now for your team.
    - Create and upload an **avatar** for the group using the **Settings** tab.
4. Use the **Members** tab to add the team members to your group, assigning appropriate permissions (note that the permissions are _not_ the same as those used in GitHub so make sure you understand these clearly).
5. Create repositories for each part of the project, using a logical naming convention.
    - Create and upload an **avatar** for each repository using the **Settings** tab.
6. Clone the repositories onto your development workstations.
7. Update the local `git config` in each of you cloned repositories:
    1. Navigate to the cloned repository.
    2. update your name `git config user.name "John Doe"` and email `git config user.email "johndoe@gmail.com"`. These must match those you used when creating your GitLab account.
    3. Update the default commit message editor from `vi` to `nano` using `git config core.editor "nano"`
    4. check the _local config_ `less .git/config` which should show you that you have updated the local settings.

Here is a typical `.git/config` file:

```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
        editor = nano
[remote "origin"]
        url = https://gitlab.com/team-fox/api.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[user]
        name = John Doe
        email = johndoe@gmail.com
```

## 7 Interacting with Git

The main way you should use to work with Git are the _shell commands_ you enter using the _terminal_. Whilst you should be comfortable using these commands you might want to use a more graphical tool for day-to-day Git operations. There are many options however you should investigate:

- Code editor Git integration: most modern code editors such as [Visual Studio Code](https://code.visualstudio.com) either come preconfigured with Git integration or it can be added as a plugin. These tools, whilst ideal for basic git work don't have the capability to run the more powerful commands.
- Standalone Git tools: whilst there are a lot of these, many (such as the one available from GitHub) are not easy to use and you may cause issues with your repository. One of the ones recommended is [GitKraken](https://www.gitkraken.com) which although has a cost attached is free for academic use.

## 7 Sprint Planning

As a team:

1. Identify who will be the **Scrum Master** and who will be the **Product Owner**.
2. Ideally with the client present, take the first user story from the top row of your user story map:
    1. The product owner describes it from the user's perspective
    2. Discusses how it can be implemented and work collaboratively on a whiteboard/flipchart to define it's UI until the client/product owner is satisfied/
    3. Explain the success criteria (how will the team know they have completed the story implementation.
3. Once the client has left:
    1. Break the story into the component tasks and write these on sticky notes.
    2. Use planning poker to estimate how many hours each task will take.
        - If the estimated time for a task is longer than 4 hours, consider splitting the task down.
    3. Add them to the left column of your Kanban board.
    4. Finally the _Scrum Master_:
        1. adds up the estimated durations for the tasks on the Kanban board and
        2. draws out a burndown chart:
            1. The X axis should show the days in the sprint.
            2. the Y axis should show the combined duration.
        3. draws a staight line from the top of the Y axis to the end of the X axis to indicate the optimal burn rate. 

### 1.1 The Kanban Board

For this first sprint, your Kanban board should have 4 columns as shown:

```
╔════════════════╦════════════════╦════════════════╦════════════════╗
║ To Do          ║ Planning       ║ Implementation ║ Done           ║
╟────────────────╫────────────────╫────────────────╫────────────────╢
║   ┌────────┐   ║                ║                ║                ║
║   │        │   ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║
║   ┌────────┐   ║                ║                ║                ║
║   │        │   ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║
║   ┌────────┐   ║                ║                ║                ║
║   │        │   ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║
╚════════════════╩════════════════╩════════════════╩════════════════╝
```

At the start of the sprint, all tasks should be in the first column. By the end of the sprint, all tasks should be in the last column.

### 1.2 The Burndown Chart

Here is an example of a burndown chart showing the line of optimal development. In this example the sprint lasts from Mon to Fri and there are an estimated 40 hours of development. It shows that the optimum burn rate would be 10 hours per day.

```
  40 ║*
     ║   *
  30 ║      *
     ║         *
  20 ║            *
     ║               *
  10 ║                  *
     ║                     *
  00 ║                        *
     ╚══════════════════════════
       M    T     W     T     F
```
