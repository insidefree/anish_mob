import { CHOICE_SUB_CATEGORIES } from '../constants'

const INIT_STATE = {
    animals: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHOICE_SUB_CATEGORIES:
            return {
                ...state,
                animals: action.payload
            }
        default:
            return state
    }
}