import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: () => ["Gilles", "Yann", "Christian"],
  produits: () => ["chemise", "pantalon"],
});

export default rootReducer;
