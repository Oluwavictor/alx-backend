import kue from 'kue';

const queue = kue.createQueue();

const job = {
    phoneNumber: 'string',
    message: 'string',
};

const queueName ='push_notification_code';

const passCode = queue.create(queueName, job).save((err) => {
        if (!err) console.log(`Notification job created: ${passCode.id}`);
    }
);

passCode.on('complete', () => {
    console.log('Notification job completed');
}).on('failed', () => {
    console.log('Notification job failed');
});

