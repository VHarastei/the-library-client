const ADD_BOOK = 'ADD_BOOK';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};

export const addBookAC = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export default reducer;
