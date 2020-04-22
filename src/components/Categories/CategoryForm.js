import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function CategoryForm(props){
  function handleNewCategorySubmission(event){
    event.preventDefault();
    props.onCategoryCreation({name: event.target.name.value, id: v4()});
  }
  return(
    <React.Fragment>
      <h2>Create a new Category:</h2>
      <form onSubmit={handleNewCategorySubmission}>
        <input type="text" name="name" placeholder="Category Name" />
        <button type="submit">add Category</button>
      </form>
    </React.Fragment>
  );
}

CategoryForm.propTypes ={
  onCategoryCreation: PropTypes.func
}

export default CategoryForm;