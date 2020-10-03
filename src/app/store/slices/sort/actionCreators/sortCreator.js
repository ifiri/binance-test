export const sortCreator = (state, action) => {
  state.sort = {
    column: action.payload.column,
    type: action.payload.type,
  };
};
