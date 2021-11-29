const database = require('../database/connection');
const generateId = require('../utils/generateUniqueId');

class CreateUserController {
  createUser = (request, response) => {
    const id = generateId();

    const { name, username, email } = request.body;

    database
      .insert({ id, name, username, email })
      .table('users')
      .then(() => {
        response.json({ sucess: 'User create, your id: ' + id });
      })
      .catch((err) => {
        response.json({ error: 'User not create', err });
      });
  };
}

module.exports = new CreateUserController();
