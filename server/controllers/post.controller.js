const Post = require('../models/post.model');
// get all posts

exports.getPosts = async (req, res) => {

  try {
    res.status(200).json(await Post.find());
  } catch(err) {
    res.status(500).json(err);
  }

};

//get single post
exports.getSinglePost = async (req, res) => {

	try {
	  res.status(200).json(await Post.findOne({ id: req.params.id }));
	} catch(err) {
	  res.status(500).json(err);
	}

  };

  // get posts by range
// Get posts by range

exports.getPostsByRange = async function (req, res) {

  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const posts = await Post.find().skip(startAt).limit(limit);
    const amount = await Post.countDocuments();

    res.status(200).json({
      posts,
      amount,
    });

  } catch(err) {
    res.status(500).json(err);
  }

};