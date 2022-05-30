const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchPost,
} = require("./posts.controllers");

router.get("/", postsGet);

router.param("postId", async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  if (post) {
    req.post = post;
    next();
  } else {
    const err = new Error("Post was not found");
    err.status = 404;
    next(err);
  }
});
router.post("/", postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
