import SocialShareModel from '../models/tools/socialShareModel.js';

class SocialShareService {
  constructor() {
    this.socialShare = new SocialShareModel(); // Instanciation unique
  }

  async createShareLink(data) {
    const { url, platform, message } = data;
    const shortUrl = this.generateShortUrl(url); // Implémentez cette fonction si nécessaire
    return await this.socialShare.create({ url, platform, message, shortUrl });
  }

  async getShareLink(id) {
    return await this.socialShare.findOne({ _id: id });
  }

  async deleteShareLink(id) {
    return await this.socialShare.deleteOne({ _id: id });
  }

  async listAll() {
    return await new SocialShareModel().find({}); // Récupère tous les Social Share Links
  }

  generateShortUrl(url) {
    // Implémentez la logique pour générer un short URL
    return `https://short.ly/${Math.random().toString(36).substring(7)}`;
  }
}

export default new SocialShareService();
