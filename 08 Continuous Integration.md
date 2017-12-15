
# Continuous Integration

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=16zG4yQJBIRq8SfnK8749vnE-rsmDMSchQRa73TOQtDI).

There is an example repository on [GitLab](https://gitlab.com/covcom/continuous-integration-example)

## Adding a Second Remote

The tools you will be using in this sprint are only available on GitLab and so you will need to add a GitLab remote to each of your local repositories.

1. Start by getting each member of your team to create an account on [GitLab](https://gitlab.com).
2. The Scrum Master should now create a group to hold the team's repositories.
3. Once the group has been created, the Scrum master should use the **Members** tab to add each of the other members of the team and assign them the **Developer** role.
4. Now the Scrum Master needs to create empty repositories to mirror those used on GitHub and make the master branch _protected_ (the protection added needs to be discussed and agreed by the rest of the team).
5. Next, each of the remotes needs to be added to the relevent local repository and given the alias `gitlab`. The command is `git add remote gitlab xxx` where xxx is the URL of the GitLab repository.
6. Finally the local commits on the master branch can be pushed to GitLab using `git push gitlab master` and repeated for all other branches. Now the rest of the team can clone this repository to their local computer and start the sprint.

## Continuous Integration

Your team should already have a suite of **Unit Tests** and **Integration Tests** which can be built into the **Continuous Integration** workflow which will eventually include:

1. A **test** stage that includes:
    1. Linting tests to enforce coding standards
    2. Unit tests to check for any logical errors
    3. Code coverage standard tests to identify any gaps in unit test coverage
2. A **deploy** stage that generates the code coverage report

Study the `.gitlab-ci.yml` file in the examples in the `exercises/09_ci/` directory:

1. Notice that the base **Docker** image used is listed at the top.
2. This is followed by a list of the **stages** in the pipeline.
3. Each **job** is then described, each having:
    1. A unique title
    2. The _stage_ to which it belongs
    3. The commands to run (note that each job needs to be completely self-contained)

Use this information to build your own `.gitlab-ci.yml`. Build this one step at a time and test thoroughly.

## Final Sprint

Now you can carry out your final sprint. In this you will be practicing **Continuous Integration**:

1. Choose and apply your chosen **branching strategy**.
2. Apply **TDD** principles making sure you write the tests before the implementation.
3. Run the **Linter**, **Unit Tests** and **Code Coverage** tools before any commits.
4. WHen you push to the GitLab remote, check that the **CI Pipeline** runs and all jobs pass.
5. Integrate your feature branch _regularly_ (at least every few hours) by using a **Pull Request**.
