# Assignment 3 - A Simple Containerized Web App

This web app supports the following commands:
## Assignment 1:
1. curl http://localhost:30000/foo
* The response will be "bar"

2. curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST --data "{\\"name\\": \\"Prabh\\"}" http://localhost:30000/hello  
* The response will be "Hello {name}" {name} comes from the JSON object submitted to the server

3. curl http://localhost:30000/kill
* This will kill the server.

## Assignment 2:
1. curl http://localhost:30000/configValue
Response:
snake

2. curl http://localhost:30000/secretValue
Response:
secretSnake

3. curl http://localhost:30000/envValue
Response:
environmentSnake

The docker image can be created by running the following command:
* docker build -t assignment3-edward-le .

The docker image can be run by using the following command:
* docker run -it -p 30000:30000 edwardlecoding/comp4016-assignment3:latest

## Assignment 3:
1. curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST --data "{\\"data\\": \\"savedSnake\\"}" http://localhost:30000/saveString

2. GET curl http://localhost:30000/getString
Response:
savedSnake
Will return with a 404 error if no string initiated.

3. curl http://localhost:30000/busywait
Busy Wait. This will cause replicas will go up based on autoscaling.

4. curl http://localhost:30000/isAlive
Readiness endpoint. Will return true.

