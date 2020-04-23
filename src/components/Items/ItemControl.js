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
      component: <ItemList items={this.state.itemList}/>,
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