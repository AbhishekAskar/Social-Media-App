// const axios = require('axios');
const form = document.getElementById("formData");
const postContainer = document.getElementById("postContainer");

// form.addEventListener('submit', addPost);

async function getPost() {
  // e.preventDefault();

  try {
    const posts = await axios.get("http://localhost:3000/posts");
    console.log(posts);
    posts.data.forEach((post) => { 

        // Create post container
        let postDiv = document.createElement("div");
        postDiv.className = "post";
        // console.log('POst div',postDiv)
        // Create image element
        let img = document.createElement("img");
        img.src = post.imageURL;
        img.alt = post.description;
        console.log('img',img);
        img.style.maxWidth = "300px"; // Adjust image display size if needed
        // Create paragraph for description
        let descPara = document.createElement("p");
        descPara.textContent = post.description;

        // Create form for comments
        let commentForm = document.createElement("form");
        commentForm.className = "commentForm";
        commentForm.action = `/addComment`;
        commentForm.method = 'POST';
        commentForm.innerHTML = `
            <input type="text" name="comment_input" placeholder="Add a comment">
            <input type="hidden" name="post_id" value="${post.id}">
            <button type="submit">Add Comment</button>
        `;

        // Create container for comments
        let commentContainer = document.createElement("div");
        commentContainer.id = "commentContainer";

        // Append elements to post container
        postDiv.appendChild(img);
        postDiv.appendChild(descPara);
        postDiv.appendChild(commentForm);
        postDiv.appendChild(commentContainer);
        postContainer.appendChild(postDiv);
        // // Clear form fields after submission
        // document.getElementById("post_link").value = "";
        // document.getElementById("post_description").value = "";

        // Event listener for adding comments
        getComment(post.id,commentContainer);
        // commentForm.addEventListener("submit", addComment);
      
    });
  } catch (e) {
    console.log(e);
  }
}
window.onload = () => {
  getPost();
};

async function getComment(postId,commentContainer) {
  const comments = await axios.get(`http://localhost:3000/getComment/${postId}`);
  console.log('comments',comments);
  if (comments.data && comments.data.length) {
    comments.data.forEach((c)=>{
      let commentText = document.createElement("p");
      commentText.textContent = c.comments;
      // let commentContainer = e.target.nextElementSibling;
      commentContainer.appendChild(commentText);
    })
  }
}
