const initialState = {
    items: []
};
  
  const tasks = (state = initialState, action) => {
        switch(action.type){
            case 'SETUP_TASKS':
              return { ...state, items: action.payload }
            
            case 'ADD_TASK':
                return { ...state, items: [...state.items, action.payload] }
            
            default: return state
        }
  };
  
  export default tasks;