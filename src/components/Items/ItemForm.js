import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types'

function ItemForm(props) {
  function handleNewItemSubmission(event) { //
    event.preventDefault();
    props.onItemCreation({
      itemName: event.target.itemName.value,
      id: v4(),
      description: event.target.description.value,
      quantity: event.target.quantity.value,
    })
  }
  return(
    <React.Fragment>
      <h2>Create new Item:</h2>
      <form onSubmit={handleNewItemSubmission}>
        <input type="text" name="itemName" placeholder="Item name"/>
        <input type="text" name="description" placeholder="description"/>
        <input type="text" name="quantity" placeholder="quantity"/>
        <button tupe="submit">add Item</button>
      </form> 
    </React.Fragment>
  );
}

ItemForm.propTypes ={
  onItemCreation: PropTypes.func
}

export default ItemForm;
