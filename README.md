# Jobs Listing App

## What is the use of this Repo

This Project demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React

The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **App** Component : This Component displays a list of jobs. This Component gets the data from a customHook **useFetchJobs**.

2. **SearchBar** Component : This Component takes the keywords entered by user and searches jobs accordingly to get results.

3. **JobsPagination** Component : This Component checks for next page and implements pagination in the app.

4. **Job** Component : This Component creates ui for job card with details of the job.

6. **useFetchJobs** customHook Component : This is a custom hook component to fetch jobs from public api https://jobs.github.com/positions.json 

#### HTTP client

**axios** library is used to make HTTP Calls


## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
