import {
    CHOICE_CATEGORY
} from '../constants'

const INIT_STATE = {
    choiceCategory: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHOICE_CATEGORY:
            return {
                ...state,
                choiceCategory: action.payload
            }
        default:
            return state
    }
}