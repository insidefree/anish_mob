import { combineReducers } from 'redux'


// category reducers
import categories from './categoriesReducer'
import selectCategory from './selectCategory'

// animal reducers
import animals from './animalsReducers'
// import animals from './animalsReducers'

export default combineReducers({
    categories,
    selectCategory,
    animals
})