import { createStore } from "redux";

import reducer from "../reducers";

const initialState = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "DAYS"
  };
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;