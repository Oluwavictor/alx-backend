import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

client.on('connect', () => {
    console.log('Redis client connected to the server');
}).on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

const keys = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];
const values = [50, 80, 20, 20, 40, 2];

keys.forEach((key, index) => {
    client.hset('HolbertonSchools', key, values[index], redis.print);
})

client.hgetall('HolbertonSchools', (err, value) => {
    if (err) {
        console.error('error');
    } else {
        console.log(value);
    }
})
