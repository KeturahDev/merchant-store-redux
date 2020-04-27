import categoryListReducer from "./../reducers/category-list-reducer";

describe("categoryListReducer", () => {
  let action;
  const categoryData = {
    name: "shoes",
    id: 1,
    items: [
      {
        itemName: "Everyday Sneakers",
        description: "so comfy oooo",
        quantity: 10,
        id: 1
      }]
  };
  const dummydata = {
    1: {
      name: "hats",
      id:1,
      items: []
    },
    2: {
      name: "cats",
      id: 2,
      items: ["item1","item2"]
    },
  }

  test("Should return an empty state", () => {
    expect(categoryListReducer({}, {type: null})).toEqual({});
  })

  test("Should add a new category", () => {
    const {name, id, items} = categoryData;
    action = {
      type: "ADD_CATEGORY",
      name: name,
      id: id,
      items: items
    };
    expect(categoryListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        id: id,
        items: items
      }
    })
    
  })

  test("should delete a category", ()=> {    
    action = {
      type: "REMOVE_CATEGORY",
      id: 1
    };
    expect(categoryListReducer(dummydata, action)).toEqual({
      2: {
        name: "cats",
        id: 2,
        items: ["item1","item2"]
      }
    })
  })
})