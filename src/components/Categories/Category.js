import React from 'react';
import PropTypes from "prop-types";
import ItemControl from "./../Items/ItemControl"

const catBoxStyle= {
  border: "2px solid blue",
  padding: "3%",
  backgroundColor: "#e1eaf7"
}

function Category(props) {
  const { deleteCategory } = props;
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <button onClick={() => deleteCategory(props.id)}>Delete Category</button>
      <div className="row" style={catBoxStyle}>
        <ItemControl list={props.itemsList}/> 
      </div>
    </React.Fragment>
  )
}

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  itemsList: PropTypes.arrayOf(PropTypes.object),
  deleteCategory: PropTypes.func
}

export default Category;
