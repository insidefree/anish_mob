import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import selectionReducer from './selectionReducer'
import animalsListreducer from './animalsListreducer'

const user = (state = { email: null }, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                email: action.payload
            }
        default:
            return state
    }
}


export default combineReducers({
    categories: categoriesReducer,
    choicedCategory: selectionReducer,
    animalsList: animalsListreducer,
    user
})

