import { v4 } from 'uuid';


const masterCategoriesList = [{
  name: "shoes",
  id: v4(),
  items: [
    {
      itemName: "Everyday Sneakers",
      description: "so comfy oooo",
      quantity: 10,
      id: v4()
    },
    {
      itemName: "Work Flats",
      description: "great for the office, matches anything",
      quantity: 6,
      id: v4()
    },
    {
      itemName: "a",
      description: "b",
      quantity: 1,
      id: v4()
    }
  ]
},
{
  name: "tops",
  id: v4(),
  items: [
    {
      itemName: "longsleeve T",
      description: "comfy and casual",
      quantity: 1,
      id: v4()
    }
  ]
},
{
  name: "jeans",
  id: v4(),
  items: [
    {
      itemName: "straight cut",
      description: "blue straight cut, goes with anything",
      quantity: 1,
      id: v4()
    }
  ]
},
{
  name: "dresses",
  id: v4(),
  items: [
    {
      itemName: "sundress",
      description: "long and comfy, goes with anything",
      quantity: 5,
      id: v4()
    }
  ]
},
{
  name: "hats",
  id: v4(),
  items: [
    {
      itemName: "sunhat",
      description: "wide baige and handmade",
      quantity: 1,
      id: v4()
    }
  ]
}]



export default masterCategoriesList;