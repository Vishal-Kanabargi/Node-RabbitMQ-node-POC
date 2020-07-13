const amqp = require('amqplib/callback_api');

// Step 1: Create Connection by using amqp
amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Create Channel Using connection
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assert Queue
        const QUEUE = 'mypoc'
        channel.assertQueue(QUEUE);
        // Step 4: Receive Messages
        channel.consume(QUEUE, (msg) => {
            console.log(`Message received: ${msg.content.toString()}`)
        }, {
            noAck: true
        })
    })
})