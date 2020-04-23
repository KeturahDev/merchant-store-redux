import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function CategoryForm(props){
  function handleNewCategorySubmission(event){
    event.preventDefault();
    props.onCategoryCreation({
      name: event.target.name.value, 
      id: v4(), 
      items: [{
        itemName: event.target.itemName.value, 
        description: event.target.description.value, 
        quantity: event.target.quantity.value, 
        id: v4()}]})
  }
  
  return(
    <React.Fragment>
      <h2>Create a new Category:</h2>
      <form onSubmit={handleNewCategorySubmission}>
        <input type="text" name="name" placeholder="Category Name" />
        <input type="text" name="itemName" placeholder="initial item name" />
        <input type="text" name="description" placeholder="initial item's description" />
        <input type="number" name="quantity" placeholder="initial item's quantity" />        
        <button type="submit">add Category</button>
      </form>
    </React.Fragment>
  );
}

CategoryForm.propTypes ={
  onCategoryCreation: PropTypes.func
}

export default CategoryForm;