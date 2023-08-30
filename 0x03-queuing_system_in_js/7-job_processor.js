import kue from 'kue';

const queue = kue.createQueue();

const blacklisted = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, d_job, done) {
    if (blacklisted.includes(d_job.data.phoneNumber)) {
        return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
    }
    d_job.progress(0, 50);
    d_job.progress(50, 100);
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    return done();
}

queue.process('push_notification_code_2', 2, (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, job, done);
});
