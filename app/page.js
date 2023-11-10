'use client'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

export default function Home() {
  const [movieTttle, setMovieTitle] = useState('')

  const dispatch = useDispatch() // dispatch actions to store
  const movies = useSelector( state => state.movies) // retrieve movies from store
  const basket = useSelector( state => state.basket) // retrieve basket from store
  const likedMovies = useSelector( state => state.likedMovies) // retrieve likedMovies from store

  function handleAddMovie() {
    dispatch({
      type: 'ADD_MOVIE',
      payload: movieTttle
    })
    setMovieTitle('')
  }

  function handleAddToBasket(movie) {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: movie
    })
  }

  function handleAddToLikedMovies(movie) {
    dispatch({
      type: 'ADD_TO_LIKED_MOVIE',
      payload: movie
    })
  }

  return (
    <main className='m-10'>
      <h1>Movies</h1>
      <input className='border-2 border-rose-600'
        type='text'
        value={movieTttle}
        onChange={ e => setMovieTitle(e.target.value) }
      />
      <button className='mx-3' onClick={handleAddMovie}>Add</button>
      <h2>Movies {movies.length}</h2>
      <ul>
        {movies.map( (movie, index) => {
          return (
            <li key={index}>
              {movie}
              <button className='m-3' onClick={() => { handleAddToBasket(movie) }}>Add</button>
              <button className='m-3' onClick={() => { handleAddToLikedMovies(movie)}}>Like</button>
            </li>
          )
        })}
      </ul>
      <h2>Basket {basket.length}</h2>
      <ul>
        {basket.map( (basket,index) => {
          return <li key={index}>{basket}</li>
        })}
      </ul>
      <h2>Liked Movies {likedMovies.length}</h2>
      <ul>
        {likedMovies.map( (likedMovies,index) => {
          return <li key={index}>{likedMovies}</li>
        })}
      </ul>
    </main>
  )
}
