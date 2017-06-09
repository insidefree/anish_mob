import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import selectionReducer from './selectionReducer'
import animalsListreducer from './animalsListreducer'

export default combineReducers({
    categories: categoriesReducer,
    choicedCategory: selectionReducer,
    animalsList: animalsListreducer
})