import BaseModel from '../interfaces/base-model.js';

class UserModel extends BaseModel {
  static modelName = "User"
  static schema = {
    email: { type: String, required: true },
    password: { type: String, required: true },
  }
}

export default UserModel