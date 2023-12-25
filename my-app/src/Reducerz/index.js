import { combineReducers } from 'redux';
import tablereducers from './tablereducers';
import filterreducers from './filterreducers'
import orderreducers from './orderreducers';

const reducer = combineReducers({
    tablereducers : tablereducers,
    filterreducers: filterreducers,
    orderreducers : orderreducers
})

export default reducer;


