import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

const middleware = [thunk, logger];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
