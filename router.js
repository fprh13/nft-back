const express = require("express");
const router = express.Router();
const communityController = require("./controllers/communityController");
const memberController = require("./controllers/memberController");
const uploader_community = require("./utils/upload-multer")("community");

/*****************************
 *        REST API           *
 ****************************/

router.post(
  "/community/image",
  uploader_community.single("community_image"),
  communityController.imageInsertion
);

router.post(
  "/community/create",
  memberController.retrieveAuthMember,
  communityController.createArticle
);

router.get(
  "/community/single-article/:art_id",
  communityController.getChosenArticle
);

router.get(
  "/community/articles",

  communityController.getArticles
);

module.exports = router;
