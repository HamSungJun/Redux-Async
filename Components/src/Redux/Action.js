export const A_FETCH_MOVIE_DATA_START = 'A_FETCH_MOVIE_DATA_START';
export const A_FETCH_MOVIE_DATA_DONE = 'A_FETCH_MOVIE_DATA_DONE';
export const A_FETCH_MOVIE_DATA_ERROR = 'A_FETCH_MOVIE_DATA_ERROR';

export const AC_FETCH_MOVIE_DATA_START = () =>{

  return (dispatch,getState) => {

    dispatch({
      type : A_FETCH_MOVIE_DATA_START,
      isFetching : true
    })

    fetch("https://yts.am/api/v2/list_movies.json")
    .then(response => response.json())
    .then((response)=>{
      
      dispatch({
        type : A_FETCH_MOVIE_DATA_DONE,
        response : response.data.movies,
        isFetching : false
      })

    })
    .catch((error)=>{

      dispatch({
        type : A_FETCH_MOVIE_DATA_ERROR,
        isFetching : false,
        error : error
      })

    })

  }

}