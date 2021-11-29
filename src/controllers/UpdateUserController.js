const database = require('../database/connection');

class UpdateUserController {
  updateUser = (request, response) => {
    const { id } = request.params;
    const { name, username, email } = request.body;

    if (!id) {
      response.send({ message: 'User not found' });
    } else {
      database
        .where('id', id)
        .update({ name: name, username: username, email: email })
        .from('users')
        .then(() => {
          response.json({ sucess: 'User Updated' }).catch((err) => {
            response.json({ error: err });
          });
        });
    }
  };
}

module.exports = new UpdateUserController();
