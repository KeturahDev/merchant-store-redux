import React from 'react';
import PropTypes from "prop-types";
import ItemControl from "./../Items/ItemControl"

function Category(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p><em>add item</em></p>
      <ItemControl list={props.itemsList}/> 
      <p>Where we will show our items</p>
      <hr/>
    </React.Fragment>
  )
}

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  itemsList: PropTypes.arrayOf(PropTypes.object)
}

export default Category;
