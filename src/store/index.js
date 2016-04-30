import * as rootReducers from '../reducers/index'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(
	combineReducers(rootReducers),
	applyMiddleware(thunk)
)

export default store
