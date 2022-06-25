import React from "react";

const Tour = (props) => {
  const [readmore, setReadmore] = React.useState(true);
  return (
    <div className="tour">
      <img src={props.image} alt="" />
      <div className="details">
        <h4>{props.name}</h4>
        <h4>{props.price}$</h4>
      </div>
      <div className="info">
        <p>{readmore ? `${props.info.substring(0, 200)}...` : props.info}</p>
        <button onClick={() => setReadmore(!readmore)}>
          {readmore ? "show more" : "show less"}
        </button>
      </div>
      <button className="btn" onClick={() => props.removeTour(props.id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
