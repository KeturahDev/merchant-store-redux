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
})