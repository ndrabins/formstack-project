export const CREATE_ITEM = "CREATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SELECT_ITEM = "SELECT_ITEM";

export function createItem(item) {
  return (dispatch) => {
      
      dispatch({ type: CREATE_ITEM });

  };
}

export function deleteItem(index) {
  return (dispatch) => {
    
      dispatch({ type: DELETE_ITEM });

  };
}

export function selectItem(index) {
  return (dispatch) => {
   
      dispatch({ type: SELECT_ITEM });

  };
}
