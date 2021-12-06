import "./posts.css";
import Post from "../Post/Post";

function Posts({ posts }) {
  return (
    <div className="postsWrapper">
      {posts &&
        posts.map((post) => (
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
