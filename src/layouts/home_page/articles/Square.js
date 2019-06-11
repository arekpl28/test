import React from "react";

const Square = props => {
  return (
    <>
      <div
        onClick={props.click}
        className={props.active ? "square active" : "square"}
      />
    </>
  );
};

export default Square;
