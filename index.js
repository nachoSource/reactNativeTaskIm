import { AppRegistry } from "react-native";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { name as appName } from "./app.json";
import App from "./App";
import { combinedReducers } from "./src/store/reducers/rootReducer";
import rootSaga from "./src/store/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combinedReducers,
  applyMiddleware(...[sagaMiddleware])
);

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);
