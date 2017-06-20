import { SELECT_CATEGORY, LOAD_CATEGORIES } from '../constants'


// fake data
import categories from '../fakeData/categories'


export const selectCategory = catID => ({
    type: SELECT_CATEGORY,
    payload: catID
})


export const loadCategories = () => ({
    type: LOAD_CATEGORIES,
    payload: categories
})