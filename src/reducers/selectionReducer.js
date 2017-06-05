import dog from '../dataJSON/dogsData'

const INIT_STATE = {
    choiceCategory: null,
    itemsForCategory: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'CHOICE_CATEGORY':
            return {
                ...state,
                itemsForCategory: findItemsByCategory(action.payload),
                choiceCategory: action.payload
            };
        default:
            return state;
    }
};

const findItemsByCategory = categoryID => {
    switch (categoryID) {
        case "cat_1":
            return dog
        case "cat_2":
            return dog
        case "cat_3":
            return dog
        case "cat_4":
            return dog
        case "cat_5":
            return dog
        case "cat_6":
            return dog
        case "cat_7":
            return dog
        case "cat_8":
            return dog
        case "cat_9":
            return dog
        default:
            return []
    }
};