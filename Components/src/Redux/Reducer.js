import {A_FETCH_MOVIE_DATA_START , A_FETCH_MOVIE_DATA_DONE , A_FETCH_MOVIE_DATA_ERROR} from './Action'

const InitialState = {
  response : [],
  error : 'None of Error Occurred',
  isFetching : false
}

const MovieReducer = (state = InitialState , action) => {

  switch(action.type){

    case A_FETCH_MOVIE_DATA_START:
      return Object.assign({},state,{
        isFetching : true
      })

    case A_FETCH_MOVIE_DATA_DONE:
      return Object.assign({},state,{
        isFetching : false,
        response : action.response
      })

    case A_FETCH_MOVIE_DATA_ERROR:
      return Object.assign({},state,{
        isFetching : false,
        error : action.error
      })

  }
}

export default MovieReducer