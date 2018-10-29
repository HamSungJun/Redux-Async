import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware , createStore } from 'redux'
import MovieReducer from './Reducer'

let MovieStore = createStore(MovieReducer,applyMiddleware(ReduxThunk,logger));

export default MovieStore