import React from "react";
import CategoryList from "./CategoryList";
import {v4} from 'uuid';

const masterCategoriesList = [{
  categoryName: "shoes",
  id: v4()
},
{
  categoryName: "tops",
  id: v4()
},
{
  categoryName: "jeans",
  id: v4()
},
{
  categoryName: "dresses",
  id: v4()
},
{
  categoryName: "hats",
  id: v4()
}]

class CategoriesControl extends React.Component {
  constructor(props){
    super(props)
    this.state={
      categories: masterCategoriesList
    }
  }

  masterList
  render(){
    return(
      <React.Fragment>
        <CategoryList categories={this.state.categories}/>
      </React.Fragment>
      );
    }
  }
  
  export default CategoriesControl;
  
  // state = {
  //   categoryName: masterList[masterList.categoryKey].categoryName, //[0]?
  //   itemList: masterList[0].categorySelection
  // }
  
  
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