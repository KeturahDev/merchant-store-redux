import React from 'react';
// import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
      <div className="buttons">
        <p>buy---quantity--delete</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default Item;