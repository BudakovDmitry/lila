import User from '../models/User.js';
import { UserType } from '../types/types'

class UsersService {
  async createUser(user: UserType) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async getAllUsers() {
    const users = await User.find();
    return users;
  }

  async getUser(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const user = await User.findById(id);
    return user;
  }

  async updateUser(user: UserType) {
    if (!user._id) {
      throw new Error('Id is not found');
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true
    });
    return updatedUser;
  }

  async deleteUser(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

export default new UsersService();
