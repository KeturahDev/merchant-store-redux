import React from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import PropTypes from "prop-types"

class ItemControl extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      formVisible: false,
      itemList: props.list
    }
  }

  handleBuyingItem = (id) => {
    const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
    const newItemInfo = selectedItem.quantity -1;
    const removingOldItem = this.state.itemList.filter(item => item.id !== id)
    const newItem = {...selectedItem, quantity: newItemInfo}
    const newItemList = removingOldItem.concat(newItem)
    this.setState({ itemList: newItemList})
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }
  
  handleNewItemSubmission = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    this.setState({itemList: newItemList, formVisible: false})
  }

  setVisibility = () => {
    if(this.state.formVisible) {
      return {
      component: <ItemForm onItemCreation={this.handleNewItemSubmission}/>,
      buttonText: "Back to Items"
      }
    } else {
      return {
      component: <ItemList items={this.state.itemList} onBuyItem={this.handleBuyingItem}/>,
      buttonText: "Add new Item"
      }
    }
  }

  render(){
    let currentlyVisible = this.setVisibility()
    return(
      <React.Fragment>
        {currentlyVisible.component}
        <button onClick={this.handleClick}>{currentlyVisible.buttonText}</button>
      </React.Fragment>
    );
  }
}

ItemControl.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

export default ItemControl;