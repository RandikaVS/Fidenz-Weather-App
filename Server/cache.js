const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = {
  get: (key) => cache.get(key),
  set: (key, value, ttlSeconds = 300) => cache.set(key, value, ttlSeconds),
};
