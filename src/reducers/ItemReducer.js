import {
  CREATE_ITEM,
  DELETE_ITEM,
  SELECT_ITEM,
} from "../actions";

const initialState = {
  items: [{name: "Item1"}, {name: "Item2"}, {name: "Item3"}],
  selectedItem: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state,
        
      };
    case DELETE_ITEM:
      return {
        ...state,
      };
    case SELECT_ITEM:
      return {
        ...state
      }
    default:
      return state;
  }
}
