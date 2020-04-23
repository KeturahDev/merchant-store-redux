import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props) {
  return (
    <React.Fragment> 
       {props.items.map(item => <Item name={item.itemName} id={item.id} quantity={item.quantity}/>)} 
    </React.Fragment> 
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
  // items: PropTypes.string.isRequired
}

export default ItemList;