import { combineReducers } from 'redux'


// reducers
import categories from './categoriesReducer'
import selectCategory from './selectCategory'


export default combineReducers({
    categories,
    selectCategory
})