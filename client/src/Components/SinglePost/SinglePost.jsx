import React from "react";
import "./singlepost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://ermonassa.gr/wp-content/uploads/2016/02/aek1.jpg"
          alt=""
        />
      </div>
      <h1 className="singlePostTitle">Lorem ipsum dolor sit.</h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author : <b>Gkevris</b>
        </span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti
        architecto sapiente quasi ea similique blanditiis enim, necessitatibus
        quisquam ratione voluptatibus ab optio pariatur delectus aliquid
        consequatur nam, dolorum id! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae vero nihil excepturi veritatis, nesciunt
        provident accusantium alias quisquam omnis eius voluptatum laudantium
        molestiae dolore aliquam! Sint unde cupiditate ex nisi.
      </p>
    </div>
  );
}

export default SinglePost;
