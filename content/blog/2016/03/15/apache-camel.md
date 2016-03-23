Apache Camel
============
Apache Camel is a light weight integration liberary which provides features to define routing and mediation rules.

It provides support for bean binding and seamless integration with frameworks like Spring and Guice. It also has extensive support for unit testing the defined routes.

It provides concrete implementation of widely used Enterprise Integration Patterns.

CamelContext
------------
Camel Context is typically singleton to an application. It provides runtime for the camel routes and serves as a registry for various endpoints and components. It also stores the information regarding routes and their contexts.

Endpoints
---------
An endpoint is a connection point to a service from which data can be recieved or sent. Some examples of end points are
* JMS queue
* Web Service
* FTP Server
* POJO
* Social Applications

Endpoints which provide the data to camel are called Producers, and endpoints which consume data from camel are called Consumers.

Component
---------
Component is also known as EndPointFactory. It creates varuous endpoints in a URI Format
`component:localpart[?options]`

Full list of available components is available at [Camel Components](http://camel.apache.org/components)


Message and Exchange
--------------------
Messages wrap requests, responses and exceptions and contain
* Headers
* Payload
* Attachments

Exchange is created by a producer and consumed by a consumer. It contains the information like a unique ID, Actual incoming and outgoing message, Exceptions (if any) and other properties related to the message.

Routes
------
A route defines the step by step movement of a message through an exchange. It is configured by a DSL, e.g. Spring XL or Java DSL

Processors
----------
A processor processes the incoming message and creates a processed message. It means, processors can be configured/defined to modify/transform a message from one form to another.

It is really useful in many applications e.g. many a times we need to convert xml message to a json message.