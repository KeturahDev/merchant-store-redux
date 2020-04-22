import React from 'react';
import PropTypes from "prop-types";

function Category(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Where we will show our items</p>
      <hr/>
    </React.Fragment>
  )
}

Category.propTypes = {
  name: PropTypes.string
}

export default Category;