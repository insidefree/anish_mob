import { combineReducers } from 'redux'


// category reducers
import categories from './categoriesReducer'
import selectCategory from './selectCategory'

// animal reducers
import animals from './animalsReducer'

// auth reducers
import auth from './auth'
import navigation from './navigation'

export default combineReducers({
    categories,
    selectCategory,
    animals,
    auth,
    nav: navigation
})