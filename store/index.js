import {createStore} from 'redux'

/*
first implement and older way we may see in legacy systems
*/

/*
create an initial state for the redux store
*/
const initialState = {
  movies: [],
  basket: [],
  likedMovies: []
}

/*
create a reducer function which changes the state according to the actions
*/
function reducer( state = initialState, action ) {
  switch(action.type) {
    case 'ADD_MOVIE':
      return { // we want to return a new object because items in the store are immutable
        ...state, // take the initial state
        movies: [...state.movies, action.payload] // add what we want to change
      }
    case 'ADD_TO_BASKET':
      return { // we want to return a new object because items in the store are immutable
        ...state, // take the initial state
        basket: [...state.basket, action.payload] // add what we want to change
      }
    case 'ADD_TO_LIKED_MOVIE':
      return { // we want to return a new object because items in the store are immutable
        ...state, // take the initial state
        likedMovies: [...state.likedMovies, action.payload] // add what we want to change
      }
    default: // if nothing changed return what we have
      return state
  }
}

const store = createStore(reducer); // create store and set reducer

export default store;
