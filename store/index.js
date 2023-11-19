import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
  movies: [
    {title: 'Fight Club', inBasket: false, liked: false},
    {title: 'The Matrix', inBasket: false, liked: false},
    {title: 'Star Wars', inBasket: false, liked: false}
  ],
  basket: [],
  likedMovies: []
}


const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload)
    },
    addToBasket: (state, action) => {
      state.movies = state.movies.map( (movie) => {
        if(movie.title === action.payload) {
          return {...movie, inBasket: !movie.inBasket }
        }
        return movie
      })
      if(state.basket.includes(action.payload)) {
        state.basket = state.basket.filter( movie => movie !== action.payload )
      } else {
        state.basket.push(action.payload)
      }
    },
    addToLikedMovies: (state, action) => {
      state.movies = state.movies.map( (movie) => {
        if( movie.title === action.payload ) {
          return { ...movie, liked: !movie.liked }
        } else {
          return movie
        }
      })
      if(state.likedMovies.includes(action.payload)) {
        state.likedMovies = state.likedMovies.filter( movie => movie !== action.payload )
      } else {
        state.likedMovies.push(action.payload)
      }
    }

  }
})

const store = configureStore( { reducer: movieSlice.reducer } );

export const { addMovie, addToBasket, addToLikedMovies } = movieSlice.actions

export default store;
