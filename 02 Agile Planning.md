# Agile Planning

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. You should refer to [this week's presentation](https://drive.google.com/open?id=1_eH_1Nhz9HkGZSWFygRDtE2b7fyx7BxglKxuF4jqWeQ).

By this stage you should have decided on your team project brief. Some of these have a named customer so you need to contact them to help you with some of activities in this worksheet. For the other project briefs, one or two of the team will need to represent the customer.

## Update Team List

Make sure you have emailed the module leader with the **name of your development team** together with the **names and email addresses** of all the team members. Remember to include details of the **lab sessions** you will be attending so that the online registration system can be updated to allow you to sign in each week.

## Introduction to Agile

During your lecture you were introduced to the principles behind agile development.

1. Discuss how the **Agile Manifesto** could impact how your team develop the product for your customer. Compare this to traditional **Waterfall** development processes.
2. With reference to the **Iron Triangle of Planning**, discuss how agile approaches can help project planning.
3. If the _scope_ is not fixed how can you manage customer expectations?
4. How would you explain agile methodologies to the customer?

## Domain Modelling

Now its time to meet with your customer and start planning the product. The first step is to draw a domain model. This will be quite large and complex so you should use either a whiteboard or flipchart paper.

1. Discuss the problem in your team and start mapping out the:
    1. Entities
    2. Relationships
    3. Responsibilities
2. As you do this you will identify questions that need clarification by the customer. Write down these questions as you think of them.
3. Your lab tutor(s) will be taking on the client role. Invite them over and get clear answers to your questions.
4. Repeat this process until you have a complete _domain model_, invite the client over and walk through this to make sure it is correct (matches the customer's expectations).

## Requirements Gathering

Meet with your client (see note at the top of this worksheet) and work with them to identify the features they want the product to provide. Record these because you will be referring back to them during the planning and development process. Make sure these are clear, unambigous and consistent.

The team should support the client to record these requirements as user stories on filecards or post-it notes.

1. Make sure you have applied INVEST principles.
2. Prioritise these based on value to the user, rejecting those which are no longer relevent.
3. Have you considered the _alternative user stories_?

Here are some user stories to get you started:

-  As an _environmental officer_ I want to be able to _see the current temperature_ so that I _know when to send out gritting lorries_.
-  As an _environmental officer_ I want to be able to _see and track the current level of CO2_ so that I _can identify the air pollution level_.
-  As a _planning officer_ I want to be able to _track dust and noise levels on building sites_ so that I _can warn builders if this is too high_.
-  As an _environmental officer_ I want to be able to _measure the vibrations caused by heavy traffic_ so that I _can identify where this is excessive_.
-  As an _environmental officer_ I want to be able to _measure lighing levels_ so that I _can decide whether to switch on street lighting or install additional lights_.
-  As a _resident_ I want to be able to _receive alerts if air pollution exceeds national safe levels_ so that I _can decide whether to go outdoors_.
-  As a _resident_ I want to be able to _receive alerts if the level of UV exceeds safe levels_ so that I _am reminded to apply suncream_.
-  As a _resident_ I want to be able to _receive a summary of pollution in my immediate location_ so that I _can take appropriate action_.
-  As an _environmental officer_ I want to be able to _identify areas suffering from regular high levels of air pollution_ so that I _can install detailed air monitoring tools and take action to reduce the level of pollution_.
-  As an _local politician_ I want to be able to _see a map of the average pollution across the city_ so that I _can target air-quality planning more effectively_.
-  As an _house buyer_ I want to be able to _see noise and air pollution for a given postcode_ so that I _can decide whether to make a house purchase_.
-  As an _xxx_ I want to be able to _xxx_ so that I _xxx_.
- As a _police officer_ I want to be able to _track noise levels in residential areas_ so that I _can identify nuisance residents and enforce noise restrictions_

Now work with your client to apply **MoSCoW** rules so that these requirements are prioritised correctly.

## Agile Roadmap

This activity should be carried out with the client. At the end of each step take a photograph of your roadmap, this will be useful when writing up your reflective report.

1. Create a 2D grid using masking tape and arrange your stories in usage sequence along the X-axis.
2. Now move these along the Y-axis to show criticality (how essential they are to the core product) with the most used features towards the top.
3. Use tape to slice the X-axis into key business processes, sliding the stories hoizontally to align them with this.
4. You should now be able to create a horizontal slice at the top to isolate the minimum viable product (MVP).
5. Finally transfer this information to a digital board such as Trello or even a spreadsheet.

You now have a product roadmap. Because your client has been actively involved in the process they will be happy with your plans and because the development team were also involved, they will also fully understand not only what needs to be done but also why. This roadmap is a live document and will be updated on a regular basis. In a permanent lab this would be left on view at all times (radiator vs icebox).

## Documentation

As a group decide on the tools you will be using to capture project documentation.

1. What type of documentation do you anticipate recording?
2. What tools will you use?
3. Who will act as final arbiter?

## Technical Planning

Your development team now know what needs to be developed. Now is the time for a frank discussion:

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

Before next week you need to make sure the team have all the required skills and have hacked together some code to prove that everything is solveable.
