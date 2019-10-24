import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ));

export default store;
