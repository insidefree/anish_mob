import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import selectionReducer from './selectionReducer'

export default combineReducers({
    categories: categoriesReducer,
    choicedCategory: selectionReducer
})