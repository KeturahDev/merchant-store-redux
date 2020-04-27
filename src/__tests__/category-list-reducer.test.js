import categoryListReducer from "./../reducers/category-list-reducer";

describe("categoryListReducer", () => {

  test("Should return an empty state", () => {
    expect(categoryListReducer({}, {type: null})).toEqual({});
  })

})