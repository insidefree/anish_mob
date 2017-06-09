import firebase from 'firebase'
import dog from '../dataJSON/dogsData'
import {
    CHOICE_CATEGORY,
    CHOICE_SUB_CATEGORIES
} from '../constants/'


export const choiceCategory = categoryID => ({
    type: CHOICE_CATEGORY,
    payload: categoryID
})

export const choiceSubCategories = subCategoryIDs => ({
    type: CHOICE_SUB_CATEGORIES,
    payload: subCategoryIDs
}) 