import { useEffect, useState } from 'react'
import { get } from '../data/httpClient'
import { MovieCard } from './MovieCard'

export function ContextMovieCard() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    get('discover/movie').then((data) => {
      setMovies(data.results)
      console.log('data:', data)
    })
  }, [])

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </ul>
  )
}
