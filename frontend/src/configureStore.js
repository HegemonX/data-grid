import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import myApp from "./reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

const configureStore = () => {
  const middlewares = [thunk];
  const persistedState = loadState();
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  const composeEnc = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    myApp,
    persistedState,
    composeEnc(applyMiddleware(...middlewares))
  );

  store.subscribe(
    throttle(() => {
      saveState({
        ...store.getState()
      });
    }),
    2000
  );
  return store;
};
export default configureStore;
