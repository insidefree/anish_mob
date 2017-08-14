import { SELECT_ANIMAL, LOAD_ANIMALS } from '../constants'


const INITIAL_STATE = {
    selectAnimal: null,
    animals: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ANIMAL:
            return {
                ...state,
                selectAnimal: action.payload
            }
        case LOAD_ANIMALS:
            return {
                ...state,
                animals: action.payload
            }
        default:
            return state
    }
}