const amqp = require('amqplib/callback_api');

// Step 1: Create Connection Using amqp
amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Create Channel Using connection
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assert Queue using channel
        const QUEUE = 'mypoc'
        channel.assertQueue(QUEUE);
        // Step 4: Send message to queue
        channel.sendToQueue(QUEUE, Buffer.from('Hi I am from India'));
        console.log(`Message send ${QUEUE}`);
    })
})