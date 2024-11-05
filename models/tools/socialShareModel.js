import ToolModel from '../toolModel.js';

class SocialShareModel extends ToolModel {
  static modelName = "SocialShare";

  static schema = {
    url: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: ""
    },
    shortUrl: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  };
}

export default SocialShareModel;
