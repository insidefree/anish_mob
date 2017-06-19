import { SELECT_CATEGORY, LOAD_CATEGORIES } from '../constants'

// fake data
import categories from '../fakeData/categories'

export const selectCategory = () => ({
    type: SELECT_CATEGORY,
    payload: ['test payload select Category']
})

export const loadCategories = () => ({
    type: LOAD_CATEGORIES,
    payload: categories
})