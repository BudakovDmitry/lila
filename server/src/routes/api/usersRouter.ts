import { Router } from 'express';
import UsersController from '../../controllers/UsersController.js';



const usersRouter: Router = Router();


usersRouter.post('', UsersController.createUser);
usersRouter.get('', UsersController.getAllUsers);
usersRouter.get('/:id', UsersController.getUser);
usersRouter.put('', UsersController.updateUser);
usersRouter.delete('/:id', UsersController.deleteUser);

export default usersRouter;
