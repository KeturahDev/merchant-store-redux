import React from 'react';
import PropTypes from "prop-types";
import ItemControl from "./../Items/ItemControl"

const catBoxStyle= {
  border: "2px solid blue",
  padding: "3%",
  backgroundColor: "#e1eaf7"
}

function Category(props) {
  return (
    <React.Fragment>
      <div className="row" style={catBoxStyle}>
        <h3>{props.name}</h3>
        <ItemControl list={props.itemsList}/> 
      </div>
    </React.Fragment>
  )
}

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  itemsList: PropTypes.arrayOf(PropTypes.object)
}

export default Category;
