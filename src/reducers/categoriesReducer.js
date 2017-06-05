import dataCategories from '../dataJSON/categories.json'

const INIT_STATE = {
    dataCategories
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return state
        default:
            return state
    }
}