
# Distributed Version Control

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done. The supporting presentation can be found at https://goo.gl/oqHvbt.

The reflection section at the end of this worksheet will get you thinking about your work and provide useful information to put in your individual report.

if you are still unfamiliar with basic git principles complete the tutorial on Codeacademy (https://www.codecademy.com/learn/learn-git)

## Setting up Your Team

By now you will already have a substantial code base and this will need to be added to some online remote repositories on the university github server.

1. Make sure all members of your team can log onto the University GitHub server (https://github.coventry.ac.uk/)
2. Make sure you all have membership of the 302CEM-1718OCTJAN organisation by accessing the organisation and seeing if there is a green **New repository** button
3. One person in your group needs to set up a team:
    1. Click on the **Teams** tab.
    2. Click on the green **New team** button and give your team the correct name (eg. Team A), keep visibility to **Visible**.
    3. On the next screen set the role to **Owner**.
    4. Use the green **Add a member** button to add each person to your team.

## Setting up Remote Repositories

Now you need to create a separate repository for each of your code bases. You will therefore end up with one for your API and at least one for your client(s). This task can be carried out by one member of your team but make sure everyone else is watching and following the steps.

1. From the oranisation [home page](https://github.coventry.ac.uk/302CEM-1718OCTJAN) click on the **New** button.
2. Assign a name to your repository that includes the group letter and the code it contains (eg. `a-api` or `b-android`), keep the visibility as _private_ and click on **Create repository** (make sure the checkbox to add a README is _NOT_ selected).
3. Choose the **Settings** tab and **Collaborators & teams** then use the dropdown to add your team. Set the permission to **Admin**.

## Uploading Existing Code

Now you can add the new GitHub remote to your local codebases and push to your newly-created remotes.

1. Decide who has the most up to date version of the different code bases.
2. Set the local name and email address substituting the name and email address _currently stored on GitHub_:
    1. `$ git config --global user.name 'John Doe'`
    2. `$ git config --global user.email 'johndoe@coventry.ac.uk'`
3. Initialise a repository inside the folder of the most up-to-date versions of each code base and add the remote copied from the appropriate repository:
    1. `$ git init`
    2. `$ git remote add origin https://github.coventry.ac.uk/302CEM-1718OCTJAN/x-xxx.git`
4. Stage and commit all changes then push to the remote:
    1. `$ git add --all`
    2. `$ git commit -m 'initial commit'`
    3. `$ git push origin master`
5. Repeat for each codebase and check the code is now uploaded to GitHub.

## Cloning Copies and Working Locally

You all need to have copies of the remote repositories.

1. Start by deleting _all_ local copies of your code base on all computers.
2. Now clone the GitHub repositories onto your development computers so you are all working from the same codebase.
3. Now you can continue working on your code, remember to pull remote commits before pushing your own!
4. As you work on the next sprint try using branches for each new feature.
