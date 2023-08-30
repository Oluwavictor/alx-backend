import redis from 'redis';

//creates a client instance
const client = redis.createClient();

// listen for the connect event or error event to see whether or not we connected successfully
client.on('connect', () => {
    console.log('Redis client connected to the server');
}).on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});