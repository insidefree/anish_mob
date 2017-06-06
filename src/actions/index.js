import firebase from 'firebase'
import dog from '../dataJSON/dogsData'
import {
    CHOICE_CATEGORY
} from '../constants/'


export const choiceCategory = categoryID => ({
    type: CHOICE_CATEGORY,
    payload: categoryID
})