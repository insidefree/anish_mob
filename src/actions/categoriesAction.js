import { SELECT_CATEGORY } from '../constants'


export const selectCategory = () => ({
    type: SELECT_CATEGORY,
    payload: ['test payload select Category']
})