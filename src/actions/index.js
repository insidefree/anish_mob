import firebase from 'firebase'
import dog from '../dataJSON/dogsData'
import animals from '../dataJSON/animals'
import {
    CHOICE_CATEGORY,
    CHOICE_SUB_CATEGORIES
} from '../constants/'


export const choiceCategory = categoryID => ({
    type: CHOICE_CATEGORY,
    payload: categoryID
})

export const loadCategoriesByID = categoryID => {
    switch (categoryID) {
        case "cat_1":
            return {
                type: CHOICE_SUB_CATEGORIES,
                payload: animals
            }
        default:
            return {
                type: CHOICE_SUB_CATEGORIES,
                payload: []
            }
    }

}

