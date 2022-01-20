import React from "react";
import "./post.css";
import { Link, useHistory } from "react-router-dom";

function Post(props) {
  const history = useHistory();
  function handleClick() {
    history.push(`/post/${props.id}`);
  }
  const PF = "http://localhost:5000/images/";

  return (
    <div className="propsWrapper">
      <div className="props">
        {props.picture && (
          <img
            onClick={handleClick}
            className="img"
            src={PF + props.picture}
            alt=""
          />
        )}
        <h1>{props.title}</h1>
        <p className="desc">{props.description}</p>
        <div className="user-section">
          <div className="img-wrapper">
            <img className="userImg" src={props.userImg} alt="" />
          </div>
          <Link className="Link-user" to={`/?user=${props.userName}`}>
            <div className="user-details-wrapper">
              <p className="userName">Author: {props.userName}</p>
              <p className="date">{props.date}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Post;
