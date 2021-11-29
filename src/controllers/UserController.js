const database = require('../database/connection');

class UserController {
  listUser = (request, response) => {
    database
      .select('*')
      .from('users')
      .then((data) => {
        response.json(data).catch((err) => {
          response.json({ error: 'no data' + err });
        });
      });
  };
  idUser = (request, response) => {
    const { id } = request.params;

    database
      .where('id', id)
      .select('*')
      .from('users')
      .then((data) => {
        response.json(data).catch((err) => {
          response.json({ error: 'User not found' + err });
        });
      });
  };
}

module.exports = new UserController();
