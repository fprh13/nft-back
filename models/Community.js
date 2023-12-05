const BoArticleModel = require("../schema/bo_article.model");
const Definer = require("../lib/mistake");
const assert = require("assert");
const {
  shapeIntoMongooseObjectId,
  board_id_enum_list,
  lookup_auth_member_liked,
} = require("../lib/config");

class Community {
  constructor() {
    this.boArticleModel = BoArticleModel;
  }

  async createArticleData(data) {
    try {
      const new_article = await this.saveArticleData(data);
      return new_article;
    } catch (err) {
      throw err;
    }
  }

  async saveArticleData(data) {
    try {
      const article = new this.boArticleModel(data);
      return await article.save();
    } catch (mongo_err) {
      console.log(mongo_err);
      throw new Error(Definer.mongo_validation_err1);
    }
  }

  async getChosenArticleData(member, art_id) {
    try {
      art_id = shapeIntoMongooseObjectId(art_id);

      const result = await this.boArticleModel.findById({ _id: art_id }).exec();
      assert.ok(result, Definer.article_err3);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async getArticlesData(inquiry) {
    try {
      const result = await this.boArticleModel
        .aggregate([{ $sort: { createdAt: -1 } }])
        .exec();

      assert.ok(result, Definer.article_err3);

      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Community;
