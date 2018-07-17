import { combineReducers } from "redux";

//Reducers
import ItemReducer from "./ItemReducer";

const appReducer = combineReducers({
  items: ItemReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_USER") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
