import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import primeNumberReducer from './primeNumberReducer';

const reducers = combineReducers({
	modal: modalReducer,
	primeNumber: primeNumberReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
