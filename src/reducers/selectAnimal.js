import { SELECT_ANIMAL } from '../constants'

const INIT_STATE = {
    selectAnimal: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECT_ANIMAL:
            return {
                ...state,
                selectAnimal: action.payload
            }
        default:
            return state
    }
}