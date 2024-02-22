FrontEnd -MiddleEnd-BackEnd -Database-Cloud
- somebody accept the request and send it to the server instead of the actual services
- we need to intermediate layer between the client side and the microservices
- using this middle end when client side send request we will able to make decision that which microservice we need to call.
- we can also do some validation rate limiting transformation and authentication in the middle end.
- we try to prepare an API GateWay that acts as this middle end.
- API GateWay is a single entry point for all the client request.
- it also do reverse proxy for the microservices.
- api gate way is a proxy between client and microservices
- 