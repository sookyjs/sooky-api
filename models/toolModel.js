import BaseModel from '../interfaces/base-model.js';

class ToolModel extends BaseModel {
  // Définissez le modelName de base
  static modelName = "Tool";

  // Définissez un schéma générique si nécessaire
  static schema = {
    createdAt: {
      type: Date,
      default: Date.now
    }
  };
}

export default ToolModel;