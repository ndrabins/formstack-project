import {
  CREATE_ITEM,
  DELETE_ITEM,
  SELECT_ITEM,
} from "../actions";

const date1 = new Date(Date.now());
const date2 = new Date('December 17, 1995 03:24:00');
const date3 = new Date('June 08, 2012 03:24:00')

const initialState = {
  items: [
    {name: "Item1", dateCreated: date1},
    {name: "Item2", dateCreated: date2},
    {name: "Item3", dateCreated: date3},
  ],
  selectedIndex: -1,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter( (item, index) => index !== action.index)
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedIndex: action.index,
      }
    default:
      return state;
  }
}
