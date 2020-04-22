const masterCategoriesList = [{
  name: "shoes",
  id: 2,
  items: [
    {
      name: "Everyday Sneakers",
      description: "so comfy oooo",
      quantity: 10
    },
    {
      name: "Work Flats",
      description: "great for the office, matches anything",
      quantity: 6
    }
  ]
},
{
  name: "tops",
  id: 3,
  items: [
    {
      name: "Everyday Sneakers",
      description: "so comfy oooo",
      quantity: 10
    },
    {
      name: "Work Flats",
      description: "great for the office, matches anything",
      quantity: 6
    }
  ]
},
{
  name: "jeans",
  id: 4,
  items: [
    {
      name: "Everyday Sneakers",
      description: "so comfy oooo",
      quantity: 10
    },
    {
      name: "Work Flats",
      description: "great for the office, matches anything",
      quantity: 6
    }
  ]
}]

const test = masterCategoriesList.indexOf({
  name: "tops",
  id: 3,
  items: [
    {
      name: "Everyday Sneakers",
      description: "so comfy oooo",
      quantity: 10
    },
    {
      name: "Work Flats",
      description: "great for the office, matches anything",
      quantity: 6
    }
  ]
})

console.log("1",test)

const testar = [1,2,3,4,5,5]

const testme = testar.indexOf(3)

console.log("2",testme)
