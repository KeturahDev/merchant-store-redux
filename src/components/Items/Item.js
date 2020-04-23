import React from 'react';
// import PropTypes from 'prop-types';

const itemBoxStyle = {
  border: "2px solid orange",
  backgroundColor: "#f5f9ff"
  // backgroundColor: "white"
}

function Item(props) {
  const {buyItem} = props;
  return (
    <React.Fragment>
      <div style={itemBoxStyle} className="col-md-3">
        <hr/>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <p>Quantity: {props.quantity}</p>
        <div className="buttons">
          <button onClick={() => buyItem(props.id)}>buy</button>
          <button onClick={props.restockItem}>restock</button>
          <button>delete</button>
          {/* <p>buy---restock--delete</p> */}
        </div>
      </div>
      {/* <hr/> */}
    </React.Fragment>
  );
}

export default Item;