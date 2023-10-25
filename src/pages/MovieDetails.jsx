import { useEffect, useParams } from 'react-router-dom'
import { useState } from 'react'
import { get } from '../data/httpClient'

export function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    get(`movie/${movieId}`).then((data) => {
      setMovie(data)
      console.log('movie:', movie)
    })
    
  }, [movieId])

  return (
    <div>

      <h1>{movie.title}</h1>
      
    </div>
  )
}
