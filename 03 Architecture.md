
# Architecture

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/tdz1qe

## High-Level Architecture

There is a lot of planning to be carried out before you can start development. Using both your _Domain Model_ and _User Story Map_, start to plan the architecture of the product you will be developing by mapping your problem to an n-tier or hexagonal architectural model. Record your design using either a whiteboard or flipchart paper and make sure everyone in the team is contributing:

1. Split your system into different tiers based on shared functionality.
2. Identify where the different tiers will be located physically.
3. How will communication be handled between the tiers?
4. Are there any other opportunities to divide your product into additional services? How could message queues and pub-sub help decouple your system components?
5. Can a hexagonal architecture improve your system?

## Technology Stack

Based on the system requirements and the team expertise you need to agree the technology stack that will be employed:

1. Analyse the data storage requirements and decide:
    1. What _type_ of database is best suited (relational, document, graph, etc.)
    2. What database technology will be used (MySQL, Redis, Mongo, Neo4J, etc.)
2. For each tier in the proposed solution:
    1. Where will the tiers physically be located?
    2. Will any of the tiers be hosted together?
    3. What OS will be used to host the tier?
    4. What language will be used and why?

### Backend

You will probably decide to use an API as your model to handle communication between your client and the data persistence tier. There are a couple of options:

1. Build a full API using a suitable language (this is covered in greater detail in the 304CEM module). You will need to choose a suitable framework that supports your chosen language:
    1. [NodeJS](https://nodejs.org/en/) and the [Restify](https://www.npmjs.com/package/restify) module. There is a good [tutorial](https://github.coventry.ac.uk/304CEM-1718SEPJAN/TEACHING-MATERIALS) and an [example API](https://github.coventry.ac.uk/304CEM-1718SEPJAN/bookshop). Avoid using the [Express](https://www.npmjs.com/package/express) framework!
    2. [Python](https://www.python.org/) and [Flask](http://flask.pocoo.org/). There are a number of good [tutorials] available online.(https://www.codementor.io/sagaragarwal94/building-a-basic-restful-api-in-python-58k02xsiq) available.
    2. PHP and [Codeigniter](https://codeigniter.com/) using the [REST Server](https://github.com/chriskacerguis/codeigniter-restserver) library.

2. Use an API builder such as:
    1. [Loopback](https://loopback.io)

You choice will depend on the overall complexity of the API you are developing and the skills you have in your team.

### Front-End

Your team will need to implement some form of front-end to the system which could be either a website or a smartphone app. You have two possible approaches to this technology stack:

1. Use the standard tech stack (eg. Swift language / iOS frameworks)
2. If your team are not competent programmers you might consider using a visual tool such as [App Inventor](http://ai2.appinventor.mit.edu/?locale=en#129660001.

Whatever solution you choose, make sure you learn and practice how to make API calls so you can easily integrate with the backend systems.

## Presentation Model

Analyse the presentation tier:

1. How will you implement the presentation model in your presentation tier(s)?
2. How will you ensure that there is clear separation between the model and view?
3. Can you achieve better separation of concerns by writing the model as a stand-alone module/framework?

## Team Organisation

Now you need to organise your team in preparation for the first sprint which will start next week. Base your discussions on the first sprint identified in the _User Story Map_:

1. Based on your skills audit, divide the team into different groups to tackle the different tiers in your solution.
2. Each group should map out how they will achieve the first user story, this should include:
    1. The language they will be using and why.
    2. The editor/IDE to be used.
  
## Technical Preparation

Each group should now prepare their computers to avoid time being wasted when the sprint starts next week:

1. Install/configure the editor/IDE
2. Make sure the language compiler/interpreter is correctly configured by writing a simple hello world script.
3. Make sure all the necessary libraries/frameworks are installed and working.
4. Make sure everyone has a local copy of the chosen database.
