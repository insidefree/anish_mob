import { SELECT_CATEGORY, NAVIGATE_TO_CAT_BY_ID } from '../constants'


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