const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:postId/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      
      // ...req.body,
      // post_id: parseInt(req.params.postId),
      // user_id: req.session.user_id,
    });


    
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
    console.log("posting comment error", err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const PostData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
