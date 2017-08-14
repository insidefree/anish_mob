import { LOAD_CATEGORIES } from '../constants'


const INITIAL_STATE = {
    categoryList: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                categoryList: action.payload
            }
        default:
            return state
    }
}