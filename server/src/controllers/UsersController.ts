import UsersService from '../services/UsersService.js';
import { Response, Request } from 'express'

class UsersController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await UsersService.createUser(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UsersService.getAllUsers();
      return res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await UsersService.getUser(req.params.id);
      return res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await UsersService.updateUser(req.body);
      return res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await UsersService.deleteUser(req.params.id);
      return res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UsersController();
