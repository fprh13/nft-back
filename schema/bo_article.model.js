const mongoose = require("mongoose");
const {
  board_id_enum_list,
  board_article_status_enum_list,
} = require("../lib/config");
const Schema = mongoose.Schema;

const boArticleSchema = new mongoose.Schema(
  {
    art_subject: { type: String, required: true },
    art_content: { type: String, required: true },
    art_image: { type: String, required: false },
    account_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BoArticle", boArticleSchema);
