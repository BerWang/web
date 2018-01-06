
# Continuous Delivery (and Deployment)

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1SY1VGNr4X9-gLq0OLeOPmVmH1E4CeaBxFKJUygLSd_c).

Welcome to the final sprint where you will be applying all the skills and knowledge you have acquired over the previous sprints but also build a continuous delivery pipeline to completely automate the delivery process.

## 1 Configure Systems

For a complete continuous delivery pipeline you will need to configure two platforms. The first will be a test environment where you will run your _acceptance tests_ and demonstrate functionality to the client whilst the second will be your live system. The systems you develop will depend on the component you are developing:

1. For the embedded system, the test environment could be a microcontroller where you can programmatically control the inputs and monitor the outputs. The live environment will be the sensor module package that will be deployed 'in the wild'.
2. For the API you will need two cloud-based servers. There are plenty of platforms such as [Google Cloud](https://cloud.google.com) and [AWS](https://aws.amazon.com) however you should also consider using [Heroku](https://heroku.com) who provide up to 5 free microservers (plus there are tutorials in the `exercises/03_architecture/deployment` directory and it is used in the sample project.
3. For the smartphone apps, the test environment can be an emulator but you should also consider a pipeline that pushes the app to test devices. Examples of this is the [TestFlight](https://developer.apple.com/testflight/) tool for iOS but there are plenty of cross-platform [alternatives](https://rollout.io/blog/testflight-alternatives-ios-beta-testing/) you can try.

## 2 Configure the Pipeline

Now you have the different environments configured we need implement a full Continuous Delivery pipeline that includes:

1. Unit and integration tests.
2. Non-functional tests.
3. Deployment to a test environment to:
    1. Run acceptance tests.
    2. Demonstrate to the client.
4. Deployment to a live enviroment.

1. In your team, agree on the stages you need in your pipeline and what jobs should go in each stage. You should draw a diagram to ensure the logic works.
2. Modify your GitLab CI pipeline by editing the `.gitlab-ci.yml` file. use the examples in this repository as well as the online examples.

## 3 Final Sprint

This is your fourth and final sprint in this module. In it you need to incorporate all the skills and knowledge from the previous sprints but you should also:

1. Make use of Continuous Delivery.
2. Make use of an alternative Git workflow.
3. Try using alternative agile methodologies.
