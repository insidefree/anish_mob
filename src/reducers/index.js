import { combineReducers } from 'redux'
// reducers
import categoriesReducer from './categoriesReducer'
import selectionReducer from './selectionReducer'
import animalsListreducer from './animalsListreducer'
import authReducer from './authReducer'

export default combineReducers({
    categories: categoriesReducer,
    choicedCategory: selectionReducer,
    animalsList: animalsListreducer,
    user: authReducer
})

