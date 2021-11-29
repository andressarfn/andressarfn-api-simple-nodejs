const Router = require('express');
const UserController = require('./controllers/UserController');
const CreateUserController = require('./controllers/CreateUserController');
const UpdateUserController = require('./controllers/UpdateUserController');
const DeleteUserController = require('./controllers/DeleteUserController');

const router = Router();

router.get('/users', UserController.listUser);
router.get('/users/:id', UserController.idUser);
router.post('/users', CreateUserController.createUser);
router.put('/users/:id', UpdateUserController.updateUser);
router.delete('/users/:id', DeleteUserController.deleteUser);

module.exports = router;
