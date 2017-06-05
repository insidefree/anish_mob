import firebase from 'firebase'
import {
    CHOICE_CATEGORY
} from '../constants/'


export const choiceCategory = categoryID => ({
    type: CHOICE_CATEGORY,
    payload: categoryID
})