import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.removeFriend(props.id)} >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>ID:</strong> {props.id}
        </li>
      </ul>
    </div>
  </div>
);



export default FriendCard;
