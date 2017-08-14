import { SELECT_CATEGORY } from '../constants'


const INIT_STATE = {
    selectedCategory: null,
}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            }
        default:
            return state
    }
}