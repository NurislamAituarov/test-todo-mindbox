const initialState = {
  listItems: [],
  filter: 'All',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        listItems: [...state.listItems, action.payload],
      };
    case 'SELECT_ITEM':
      const newArr = state.listItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, active: !item.active };
        } else {
          return item;
        }
      });
      return {
        ...state,
        listItems: [...newArr],
      };
    case 'FILTER_ITEM':
      return {
        ...state,
        filter: action.payload,
      };
    case 'DELETE_ITEM':
      const updateArr = state.listItems.filter((item) => {
        return item.active === true;
      });
      return {
        ...state,
        listItems: [...updateArr],
      };
    default:
      return state;
  }
};
export { reducer };
