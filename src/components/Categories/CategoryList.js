import React from "react";
import Category from "./Category";
import PropTypes from "prop-types";

function CategoryList(props){
  return(
    <React.Fragment>
      {props.categories.map(category => <Category name={category.name} id={category.id} itemsList={category.items}/>)}
    </React.Fragment>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object)
}

export default CategoryList; 