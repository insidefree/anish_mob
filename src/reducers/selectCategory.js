import { SELECT_CATEGORY } from '../constants'


const INIT_STATE = {
    selectCategory: null
};

const data = [{ "categories": { "cat_1": "cat_1", "cat_2": "cat_2" } }]

export const loadCategories = () => ({ data })


export const selectCategory = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectCategory: action.payload
            }
        default:
            return state
    }
}