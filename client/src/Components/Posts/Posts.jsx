import React, { useContext } from "react";
import "./posts.css";
import { StoreContext } from "../../store";
import Post from "../Post/Post";

function Posts() {
  const state = useContext(StoreContext);
  return (
    <div className="postsWrapper">
      {state.posts.map((post) => (
        <Post
          key={post.id}
          name={post.title}
          img={post.image}
          desc={post.description}
          comm={post.commentsCount}
          userName={post.user.name}
          userImg={post.user.picture}
          date={post.user.date}
          id={post.id}
        />
      ))}
    </div>
  );
}
export default Posts;
