import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

// here we use midlewares !!!!


export default createStore(reducers, applyMiddleware(thunk))