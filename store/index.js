import {createStore} from 'redux'

/*
first implement and older way we may see in legacy systems
*/

/*
create an initial state for the redux store
*/
const initialState = {
  movies: [
    {title: 'Fight Club', inBasket: false, liked: false},
    {title: 'The Matrix', inBasket: false, liked: false},
    {title: 'Star Wars', inBasket: false, liked: false}
  ],
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
        movies: state.movies.map( movie => movie.title === action.payload ? {...movie, inBasket: !movie.inBasket } : movie),
        basket: state.basket.includes(action.payload) ? state.basket.filter( movie => movie !== action.payload ) : [...state.basket, action.payload] // add what we want to change
      }
    case 'ADD_TO_LIKED_MOVIE':
      return { // we want to return a new object because items in the store are immutable
        ...state, // take the initial state
        movies: state.movies.map( movie => movie.title === action.payload ? {...movie, liked: !movie.liked } : movie),
        likedMovies: state.likedMovies.includes(action.payload) ? state.likedMovies.filter( movie => movie !== action.payload ) : [...state.likedMovies, action.payload] // add what we want to change
      }
    default: // if nothing changed return what we have
      return state
  }
}

const store = createStore(reducer); // create store and set reducer

export default store;
