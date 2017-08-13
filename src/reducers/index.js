import { combineReducers } from 'redux'


// reducers
import categories from './categoriesReducer'
import selectCategory from './selectCategory'
import selectAnimal from './selectAnimal'

export default combineReducers({
    categories,
    selectCategory,
    selectAnimal
})