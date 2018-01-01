
# Continuous Integration

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=16zG4yQJBIRq8SfnK8749vnE-rsmDMSchQRa73TOQtDI).

There is an example repository on [GitLab](https://gitlab.com/covcom/continuous-integration-example)

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
