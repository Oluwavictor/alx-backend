import kue from 'kue';
import {progress} from "mocha/lib/reporters";

const jobs = [
    {
        phoneNumber: '4153518780',
        message: 'This is the code 1234 to verify your account'
    },
    {
        phoneNumber: '4153518781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4153518743',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4153538781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4153118782',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4153718781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4159518782',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4158718781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4153818782',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4154318781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4151218782',
        message: 'This is the code 4321 to verify your account'
    }
];

const queue = kue.createQueue();

jobs.forEach((data) => {
    conJob = queue.create('push_notification_code_2', data).save((err) => {
        if (!err) console.log(`Notification job created:Job.id}`);
    });

    pushJob.on('complete', () => {
        console.log(`Notification job ${pushJob.id} completed`);
    }).on('progress', () => {
        console.log(`Notification job ${pushJob.id} ${progress} complete`)
    }).on('failed', (err) => {
        console.log(`Notification job ${pushJob} failed: ${err}`);
    });
});
