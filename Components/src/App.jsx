import React from 'react';
import { AC_FETCH_MOVIE_DATA_START } from './Redux/Action'
import { connect } from 'react-redux'
import { PacmanLoader } from 'react-spinners'
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div>

        <div className='btn-row'>
          <button className='btn-row__btn' onClick={this.props.movieCall}>MovieCall</button>
        </div>
        <div className={(this.props.isFetching ? 'loading' : 'loaded')}>
          {this.props.isFetching?

            <div>
              <PacmanLoader color={'white'} size={60} />
            </div>

            :

            
              MovieLoader(this.props.movieData)
            

          }
        </div>
      </div>
    )
  }
}

const MovieLoader = ((props) => {
  const MovieLists = props.map((element) => {
    return(
      <div className='loaded__item' key={element['id']}>
        <div className='loaded__item-title-row'>
          <h2 className='loaded__item-title-row__title'>{element['title']}</h2>
        </div>
        <div className='loaded__item-img-row'>
          <img className='loaded__item-img-row__img' src={element['medium_cover_image']} alt="movieimg"/>
        </div>
      </div>
    )
  })

  return MovieLists
})

const mapStateToProps = (state) => {
  return{
    movieData : state.response,
    isFetching : state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    movieCall : () => {
      dispatch(AC_FETCH_MOVIE_DATA_START());
    }
  }
}

App = connect(mapStateToProps , mapDispatchToProps)(App)

export default App