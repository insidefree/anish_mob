const data = { "categories": { "cat_1": "cat_1", "cat_2": "cat_2" } }

const INITIAL_STATE = {
    categoriesList: data.categories
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}