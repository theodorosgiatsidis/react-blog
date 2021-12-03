import React from "react";
import "./post.css";
import { useHistory } from "react-router-dom";

function Post(props) {
  const history = useHistory();
  function handleClick() {
    history.push(`/post/${props.id}`);
  }
  return (
    <div onClick={handleClick} className="propsWrapper">
      <div className="props">
        <img className="img" src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p className="desc">{props.desc}</p>
        <div className="user-section">
          <div className="img-wrapper">
            <img className="userImg" src={props.userImg} alt="" />
          </div>
          <div className="user-details-wrapper">
            <p className="userName">{props.userName}</p>
            <p className="date">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
