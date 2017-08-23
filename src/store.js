import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

// here we use midlewares !!!!


export default createStore(reducers, {}, applyMiddleware(ReduxThunk))