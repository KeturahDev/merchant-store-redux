import { v4 } from 'uuid';


const masterCategoriesList = [{
  name: "shoes",
  id: v4(),
  items: [
    {
      name: "Everyday Sneakers",
      description: "so comfy oooo",
      quantity: 10,
      id: v4()
    },
    {
      name: "Work Flats",
      description: "great for the office, matches anything",
      quantity: 6,
      id: v4()
    },
    {
      name: "a",
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
      name: "a",
      description: "b",
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
      name: "a",
      description: "b",
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
      name: "a",
      description: "b",
      quantity: 1,
      id: v4()
    }
  ]
},
{
  name: "hats",
  id: v4(),
  items: [
    {
      name: "a",
      description: "b",
      quantity: 1,
      id: v4()
    }
  ]
}]



export default masterCategoriesList;