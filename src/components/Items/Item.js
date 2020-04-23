import React from 'react';
import PropTypes from 'prop-types';

const itemBoxStyle = {
  border: "2px solid orange",
  backgroundColor: "#f5f9ff"
  // backgroundColor: "white"
}

function Item(props) {
  const {buyItem, restockItem, deleteItem} = props;
  return (
    <React.Fragment>
      <div style={itemBoxStyle} className="col-md-3">
        <hr/>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <p>Quantity: {props.quantity}</p>
        <div className="buttons">
        { props.quantity <= 0 &&
            <p>sorry, item is unailable for purchase</p>
        }
        { props.quantity > 0 &&
          <button onClick={() => buyItem(props.id)}>buy</button>
        }
          <button onClick={() => restockItem(props.id)}>restock</button>
          <button onClick={() => deleteItem(props.id)}>delete</button>
          {/* <p>buy---restock--delete</p> */}
        </div>
      </div>
      {/* <hr/> */}
    </React.Fragment>
  );
}

Item.propTypes ={
  buyItem: PropTypes.func,
  restockItem: PropTypes.func,
  deleteItem: PropTypes.func
}

export default Item;