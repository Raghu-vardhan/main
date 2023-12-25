import { legacy_createStore as createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './Reducerz';

const middleware = [thunk];

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store
