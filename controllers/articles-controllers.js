const {
  fetchArticleById,
  fetchArticleData,
  fetchCommentData,
  postCommentData,
  patchVotes,
} = require("../models/articles-models");

const sendArticleById = (req, res, next) => {
  const { article_id } = req.params;
  fetchArticleById(article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

const sendArticleData = (req, res, next) => {
  fetchArticleData()
    .then((articleData) => {
      res.status(200).send({ articleData });
    })
    .catch(next);
};

const sendCommentsByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  fetchCommentData(article_id)
    .then((commentData) => {
      res.status(200).send({ commentData });
    })
    .catch(next);
};

const postCommentsByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;
  postCommentData(article_id, username, body)
    .then((commentData) => {
      res.status(201).send({ commentData });
    })
    .catch(next);
};

const patchArticleById = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;
  patchVotes(article_id, inc_votes)
  .then((articleData) => {
    res.status(202).send({ articleData })
  })
  .catch(next);
}

module.exports = {
  sendArticleById,
  sendArticleData,
  sendCommentsByArticleId,
  postCommentsByArticleId,
  patchArticleById,
};
