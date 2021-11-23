import React, { useContext } from "react";
import { useParams } from "react-router";
import { StoreContext } from "../../store";

function Post() {
  const state = useContext(StoreContext);
  const { id } = useParams();
  const post = state.posts.find((post) => post.id === id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <img src={post.image} alt="" />
    </div>
  );
}

export default Post;