var redis = require('redis')
var client = redis.createClient(6379, 'localhost')

client.set('key', 'key1value1')

client.get('key', function(err, key) {
  console.log(key);
})