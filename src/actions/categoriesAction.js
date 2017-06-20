import { SELECT_CATEGORY, LOAD_CATEGORIES } from '../constants'


// fake data
import categories from '../fakeData/categories'


export const selectCategory = catID => ({
    type: SELECT_CATEGORY,
    payload: categories.filter(cat => cat.categoryId === catID)[0]
})


export const loadCategories = () => ({
    type: LOAD_CATEGORIES,
    payload: categories
})
