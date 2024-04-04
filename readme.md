# Welcome to ApiGateway service

This is a simple API Gateway service that acts as a gateway to the microservices. It is built using Node.js, Express.js, and MySQL.
FrontEnd -MiddleEnd-BackEnd -Database-Cloud
- somebody accept the request and send it to the server instead of the actual services
- we need to intermediate layer between the client side and the microservices
- using this middle end when client side send request we will able to make decision that which microservice we need to call.
- we can also do some validation rate limiting transformation and authentication in the middle end.
- we try to prepare an API GateWay that acts as this middle end.
- API GateWay is a single entry point for all the client request.
- it also do reverse proxy for the microservices.
- api gate way is a proxy between client and microservices
- it is a single point of entry for all the client request

## Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following environment variables
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
PORT=3000

```
4. Run `npm start`
5. The server will start at `http://localhost:3000`

## Features
1. **Rate Limiting**: The API Gateway service has a rate limiting feature that limits the number of requests that can be made to the service. The rate limit is set to 100 requests per minute. If the rate limit is exceeded, the service will return a `429 Too Many Requests` response.
2. **Authentication**: The API Gateway service has a simple authentication feature that requires a `Bearer` token to be passed in the `Authorization` header of the request
3. **Reverse Proxy**: The API Gateway service acts as a reverse proxy for the microservices. It forwards the request to the appropriate microservice based on the path of the request.
4. **Logging**: The API Gateway service logs all incoming requests to the console.



## Scope for Improvement
1. Add more error handling
2. Add more validations
3. Add more tests
4. Add more features
5. Add more documentation
