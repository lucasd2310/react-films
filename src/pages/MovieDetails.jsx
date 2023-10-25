import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get } from '../data/httpClient'
import { getMovieImg } from '../utils/getMovieImg'
import './MovieDetails.css'

export function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    get(`movie/${movieId}`).then((data) => {
      setMovie(data)
      setGenre(data.genres[0])
    })
  }, [movieId])

  const imageUrl = getMovieImg(movie.poster_path, 500)

  return (
    <div className='detailsContainer'>
      <img
        src={imageUrl}
        alt={movie.title}
        className='col movieImage'
      />
      <div className='col movieDetails'>
        <p className='movieTitle'>{movie.title}</p>
        <p>
          <strong>Genre: </strong>
          {genre.name}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  )
}
