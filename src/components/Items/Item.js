import React from 'react';
// import PropTypes from 'prop-types';

const itemBoxStyle = {
  border: "2px solid orange",
  backgroundColor: "#f5f9ff"
  // backgroundColor: "white"
}

function Item(props) {
  return (
    <React.Fragment>
      <div style={itemBoxStyle} className="col-md-3">
        <hr/>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <p>Quantity: {props.quantity}</p>
        <div className="buttons">
          <p>buy---restock--delete</p>
        </div>
      </div>
      {/* <hr/> */}
    </React.Fragment>
  );
}

export default Item;