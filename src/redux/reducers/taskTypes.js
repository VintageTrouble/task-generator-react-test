const initialState = {
    items: [],
};
  
  const taskTypes = (state = initialState, action) => {
    if (action.type === 'SETUP_TASKTYPES') {
      return {
        ...state,
        items: action.payload,
      };
    }

    return state;
  };
  
  export default taskTypes;