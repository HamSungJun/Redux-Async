import ReduxThunk from 'redux-thunk'
import { applyMiddleware , createStore } from 'redux'
import MovieReducer from './Reducer'

let MovieStore = createStore(MovieReducer,applyMiddleware(ReduxThunk));

export default MovieStore