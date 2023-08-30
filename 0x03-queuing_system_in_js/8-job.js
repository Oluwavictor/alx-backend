function createPushNotificationsJobs(jobs, queue) {
    if (Array.isArray(jobs)) {
        jobs.forEach((data) => {
            const PushJob = queue.create('push_notification_code_3', data).save((err) => {
                if (!err) console.log(`Notification job created: ${PushJob.id}`);
            });
            PushJob.on('complete', () => {
                console.log(`Notification job ${PushJob.id} completed`);
            }).on('progress', (progress) => {
                console.log(`Notification job ${PushJob.id} ${progress}% complete`);
            }).on('failed', (err) => {
                console.log(`Notification job $${PushJob.id} failed: ${err}`);
            });
        });
    } else {
        throw new Error('Jobs is not an array');
    }
}

module.exports = createPushNotificationsJobs;