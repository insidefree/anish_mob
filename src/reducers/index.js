import { combineReducers } from 'redux'


// reducers
import loadCategories from './loadCategoriesReducer'

console.log(loadCategories())

export default combineReducers({
    loadCategories
})