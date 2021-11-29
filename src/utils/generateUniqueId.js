const crypto = require('crypto');

generateId = () => {
  return crypto.randomBytes(2).toString('HEX');
};

module.exports = generateId;
