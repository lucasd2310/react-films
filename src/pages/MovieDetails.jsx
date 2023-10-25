import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get } from '../data/httpClient'
import { getMovieImg } from '../utils/getMovieImg'

export function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    get(`movie/${movieId}`).then((data) => {
      setMovie(data)
      setGenre(data.genres[0])
      console.log('data:', data)
    })
  }, [movieId])

  const imageUrl = getMovieImg(movie.poster_path, 500)

  return (
    <div>
      <img
        src={imageUrl}
        alt={movie.title}
      />
      <div>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
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
