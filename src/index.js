import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

let store = createStore(rootReducer, enhancer);



ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
document.getElementById("root")
);
registerServiceWorker();
