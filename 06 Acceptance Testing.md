
# Acceptance Testing

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/Tx8nWx

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

## Business Domain Modelling

Start by modelling the problem domain. This can be done either on paper or using a whiteboard. Make sure you include:

1. The **Entities**
2. The **Relationships**
3. The **Responsibilities**

Now take each of your completed user stories and map them against this problem domain.

## Behaviour-Driven Development

Before starting your next sprint, revisit each of the completed _user stories_ and define each of them using a _business-readable DSL_ such as Gherkin.

1. Create a `features/` directory.
2. Create a file with a `.feature` extension for each user story.
3. At the top of each of the files create a **feature** and add the user story.
4. Now define a number of **scenarios** to clearly and unambiguously define all the tests you need to carry out.
5. Under each scenario, list the steps required.
6. Install and run a tool such as `gherkindoc` to generate your **documentation site** so it can be viewed through github.coventry.ac.uk

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
5. A new `.feature` file is created for each user story in the new sprint and the team work with the customer to write the scenarios and steps.
6. The Kanban board is updated with the user stories from the new sprint.

## The Sprint

During this sprint, try to implement each of the _scenarios_ as an automated acceptance test. By the end of the sprint you should have one test per scenario and all the tests should have passed.

### Step Definitions

As a bare minimum you will need to write the tests but you should have a go at writing a step-definition file which will read the `.feature` files and automatically generate and run the acceptance tests.

## Supporting Materials

There are a number of supporting labs that will help you implement your acceptance tests.

1. If you are creating a **website**, use the materials in the **casperjs** directory.
2. If you are creating an **API**, use the materials in the **frisbyjs** directory.

 
-----

## Acruing Knowledge

As you begin each sprint you should aim to apply more of the knowledge and skills covered in the lectures. For this sprint you will need to include:

1. The sprint planning and review meetings
2. The daily standups
3. Pair programming
4. Version control including a good branching strategy
5. You should work with a DSL to define your tests
6. You should use an appropriate framework to define these as automated tests
7. Finally, you should attempt to write step-definitions to automatically convert the tests written in a DSL to automated tests.

## Sprint Planning

By this stage you have completed and signed off several sprints Before your bnext sprint you will need to carry out a sprint plamming meeting. _Make sure you have invited your client_.

1. The client and developers use the Kanban board to identify any issues in the sprint backlog that were not completed:
  1. Issues are added to the issue tracker in GitHub.
  2. These issues are added to the sprint backlog column on the Kanban board.
2. The client and developers update the _User Story Map_:
  1. Change the story priority based on the client's current requirements.
  2. Decide what will be included in the next sprint.
3. A new `.feature` file is created for each user story in the new sprint and the team work with the customer to write the scenarios and steps.
4. The Kanban board is updated with the user stories from the new sprint.


## Microservices (advanced)

Analyse your product and identify ways to divide it into multiple microservices. Can you implement these as a series of Docker containers?

1. Start by sketching out each service.
2. Write a `Dockerfile` for each of these in its own directory.
3. Given the ephemeral nature of Docker containers, how will you manage persistence?
3. Now add lines to represent the connections between the containers.
4. Define these in a `docker-compose.yml` file.

## Sprint

During this sprint make sure you use your acceptance tests to measure progress.
