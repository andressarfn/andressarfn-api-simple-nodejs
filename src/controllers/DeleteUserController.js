const database = require('../database/connection');

class DeleteUserController {
  deleteUser = (request, response) => {
    const { id } = request.params;

    database
      .where('id', id)
      .del()
      .from('users')
      .then(() => {
        response.json({ sucess: 'Deleted' }).catch((err) => {
          response.json({ error: 'User not deleted' + err });
        });
      });
  };
}

module.exports = new DeleteUserController();
