This is sample POC to demonstrate How to integrate RabbitMQ with Node Application

## Software’s Required

Below Software’s needs to be installed before you proceed 

1. Node v12 above
2. RabbitMQ management - Which is Message broker which holds and transport sms

To check ~ brew services list    

Version 3.8.2

if you’re not installed - run  ~brew install rabbitmq

### `brew services start rabbitmq`

To start rabbitmq

Once you started then hit url http://localhost:15672

default userName and password is guest both

### `Required packages`

"amqplib": "^0.5.5"

1. Sender.js will send sms to server 


###  Run `node sender.js`

To check login to http://localhost:15672 and check . So, now it's working fine. 

Let's move to create receiver.js to get sms from sender

Run again 

###  Run `node recevier.js`

and check on again by check login to http://localhost:15672 and check . if data is buffer then stringify it.

noAck: true , Will helps us to delete the sms if that has been consumed.


This is just a sample Example , In real time there will be workers to process messages and send it to receiver...
