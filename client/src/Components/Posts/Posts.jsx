import "./posts.css";
import Post from "../Post/Post";
import { useContext } from "react";
import { StoreContext } from "../../context/store";

function Posts() {
  const { posts } = useContext(StoreContext);
  const PF = "http://localhost:5000/images/";

  return (
    <div className="postsWrapper">
      {posts &&
        posts.map((post) => (
          <Post
            key={post._id}
            title={post.title}
            picture={post.picture}
            description={post.description}
            userName={post.user.username}
            userImg={PF + post.user.picture}
            date={new Date(post.createdAt).toDateString()}
            id={post._id}
          />
        ))}
    </div>
  );
}
export default Posts;
