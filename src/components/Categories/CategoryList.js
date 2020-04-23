import React from "react";
import Category from "./Category";
import PropTypes from "prop-types";

function CategoryList(props){
  const { onDelete } = props;
  return(
    <React.Fragment>
      {props.categories.map(category => 
        <Category 
        name={category.name} 
        id={category.id} 
        itemsList={category.items} 
        deleteCategory={onDelete}
        key={category.id}/>)}
    </React.Fragment>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}

export default CategoryList; 