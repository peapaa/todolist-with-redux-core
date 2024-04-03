import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancers);
console.log(store);
export default store;
