export const addItem = (item) => ({ type: 'ADD_ITEM', payload: item });
export const selectItem = (index) => ({ type: 'SELECT_ITEM', payload: index });
export const filterItem = (value) => ({ type: 'FILTER_ITEM', payload: value });
export const deleteItem = (index) => ({ type: 'DELETE_ITEM', payload: index });
