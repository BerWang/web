
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
