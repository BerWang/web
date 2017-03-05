
# Architecture

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/cyc4sn

## Acruing Knowledge

As you begin each sprint you should aim to apply more of the knowledge and skills covered in the lectures. For this sprint you will need to include:

1. The sprint planning and review meetings
2. The daily standups
3. Pair programming
4. Version control including a good branching strategy
5. You should work with a DSL to define your tests
6. You should use an appropriate framework to define these as automated tests
7. Finally, you should attempt to write step-definitions to automatically convert the tests written in a DSL to automated tests.

## Architecture

Analyse each component in your full-stack solution:

1. Implement the **Model View Controller** pattern in your solution.
2. Can your model functionality be isolated in one or more libraries?
3. You are already using one service (your RESTful API), are there any other opportunities to divide your product into additional services? How could message queues and pub-sub help decouple your system components?
4. What are the pros and cons of each approach, can you define a useful strategy to decide which is the most appropriate solution for a given scenario?

## Microservices

Analyse your product and identify ways to divide it into multiple microservices. Can you implement these as a series of Docker containers?

1. Start by sketching out each service.
2. Write a `Dockerfile` for each of these in its own directory.
3. Given the ephemeral nature of Docker containers, how will you manage persistence?
3. Now add lines to represent the connections between the containers.
4. Define these in a `docker-compose.yml` file.

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

## Sprint

During this sprint make sure you use your acceptance tests to measure progress.
