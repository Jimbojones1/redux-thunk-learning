import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleWare } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';
import { composeWithDevToools } from 'redux-devtools-extension';

/// Our History const syncs our browserHistory with our store
// and must be exported so we can use it within routes later
export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleWare(history)
];


if(process.env.NODE_ENV === 'development'){
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION

  if(typeof devToolsExtension === 'function'){
    enhancers.push(devToolsExtension());
  };
};


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;

















