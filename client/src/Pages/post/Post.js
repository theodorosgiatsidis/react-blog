import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { StoreContext } from "../../context/store";
import "./post.css";
import axios from "axios";

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(StoreContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const res = await axios.get(`/posts/${id}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        username: user.username,
      });

      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (error) {}
  };

  return post ? (
    <div className="post-wrapper">
      {updateMode ? (
        <input
          type="text"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
      ) : (
        <h1>{title}</h1>
      )}
      {updateMode ? (
        <textarea
          className="desc-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoFocus
        />
      ) : (
        <p>{description}</p>
      )}
      {updateMode && (
        <button onClick={handleUpdate} className="singlePostButton">
          Update
        </button>
      )}
      <img className="img-post" src={PF + post.picture} alt="" />
      <p className="userName" style={{ color: "coral", margin: "10px" }}>
        Author: {post.user.username}
      </p>
      <p className="singlePostDate" style={{ color: "GrayText" }}>
        {new Date(post.createdAt).toDateString()}
      </p>
      {post.user.username === user?.username && (
        <div className="singlePostEdit">
          <i
            className="singlePostIcon fas fa-edit"
            onClick={() => setUpdateMode(true)}
          ></i>
          <i
            className="singlePostIcon far fa-trash-alt"
            onClick={handleDelete}
          ></i>
        </div>
      )}
    </div>
  ) : null;
}

export default Post;
