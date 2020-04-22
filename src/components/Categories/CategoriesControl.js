import React from "react";
import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";
import {v4} from 'uuid';

const masterCategoriesList = [{
  name: "shoes",
  id: v4()
},
{
  name: "tops",
  id: v4()
},
{
  name: "jeans",
  id: v4()
},
{
  name: "dresses",
  id: v4()
},
{
  name: "hats",
  id: v4()
}]

class CategoriesControl extends React.Component {
  constructor(props){
    super(props)
    this.state={
      formVisible: false,
      categories: masterCategoriesList
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleNewCategorySubmission = (newCategory) => {
    const newCategories = this.state.categories.concat(newCategory)
    this.setState({categories: newCategories, formVisible: false})
  }

  setVisibility = () => {
    if (this.state.formVisible) {
      return {
      buttonText: "Return to Store",
      component: <CategoryForm onCategoryCreation={this.handleNewCategorySubmission}/>
      }
    } else {
      return {
        buttonText: "Add Category",
        component: <CategoryList categories={this.state.categories}/>
      }
    }
  }

  render(){
    let currenltyVisible = this.setVisibility();
    return(
      <React.Fragment>
        {currenltyVisible.component}
        <button onClick={this.handleClick}>{currenltyVisible.buttonText}</button>
      </React.Fragment>
      );
    }
  }
  
  export default CategoriesControl;

  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  // mastrList = [
    //   // {
      //     categoryName: shoes,
      //     categorySelection: [
        //       {
          //         name: "stilehto",
          //         description: "might kill u",
                    //         quantity: 1,
                    //         // category: "shoes"
                    //       }
                    //   //   ]
                    //   // }
                    // ]