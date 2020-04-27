export default (state = {}, action) => {
  const {name, id, items} = action
  switch (action.type) {
    case 'ADD_CATEGORY':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          id: id,
          items: items
        }
      });
    default:
      return state;
  }
};