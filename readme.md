# FORM API PROJECT

Author: Anastasia Frezefond

## How to Set Up the Environment

### Prerequisites:

    Ensure Docker is installed on your machine.

### Setup:

    Navigate to the root directory of the project.

### Run Docker Compose:

    docker-compose up -d --build

## List of Routes

### Admin Routes

    Create a questionnaire with several questions
        Endpoint: /admin/submit
        Method: POST
        Description: Submit a form

    Retrieve answers to questions by user for this questionnaire
        Endpoint: /admin/userResponse/:userId
        Method: GET
        Description: Retrieve responses for a specific user

### User Routes

    Retrieve the questionnaire with these questions
        Endpoint: /user/form/:formId
        Method: GET
        Description: Get a form by its ID

    Send response to questions in the questionnaire by a user
        Endpoint: /user/submit
        Method: POST
        Description: Submit a form as a user

## Use of REST Client

id : humao.rest-client
To facilitate local testing, consider installing a REST client plugin (Visual Studio Code).
File: demo.rest
Use this file for testing routes

## View database

- Run: docker exec -it mongodb mongosh
- Run: show dbs
