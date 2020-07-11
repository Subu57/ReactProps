import React from "react";

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="me" />
      <p>{props.num}</p>
      <p>{props.email}</p>
    </div>
  );
}
export default Cards;
