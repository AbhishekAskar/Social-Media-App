const path = require("path");

const SocialMedia = require("../models/socialMedia.js");
const Comments = require("../models/comments.js");

exports.getHomePage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "html", "index.html"));
};

exports.getPosts = (req, res, next) => {
  SocialMedia.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
exports.getComments = (req, res, next) => {
  Comments.findAll({
    where: {
        post_id: req.params.id
    }
})
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};

exports.addPost = (req, res, next) => {
    // console.log(req.body);
    const imageURL = req.body.imageURL; 
    const description = req.body.description;
    console.log('Received data:', imageURL, description);
  
    SocialMedia.create({
      imageURL: imageURL,
      description: description
    })
    .then((result) => {
      // console.log("Expense added:", result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
    
  };

  exports.addComment = (req, res, next) => {
    console.log(req.body);
    const comment = req.body.comment_input; 
    const postId = req.body.post_id;
    // const description = req.body.description;
    // console.log('Received data:', imageURL, description);
  
    Comments.create({
      comments: comment,
      post_id : postId
    })
    .then((result) => {
      // console.log("Expense added:", result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
    
  };

