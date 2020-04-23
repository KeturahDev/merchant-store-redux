import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props) {
  const {items, onBuyItem, onRestockItem, onDeletingItem} = props
  return (
    <React.Fragment> 
        {items.map(item => 
          <Item 
          name={item.itemName} 
          description={item.description} 
          id={item.id} 
          quantity={item.quantity}
          buyItem={onBuyItem}
          restockItem={onRestockItem}
          deleteItem={onDeletingItem}
          key={item.id}/>
        )} 
    </React.Fragment> 
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList;