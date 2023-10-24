const API = 'https://api.themoviedb.org/3'

export function get(path) {
  return fetch(`${API}/${path}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjE0YmQ3Mjc2M2VlODIwZTA2MzdiMzBmMWJhODdiOCIsInN1YiI6IjY1MzgxYjc3NDFhYWM0MDBjMzMyNTI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d3XdUwOU0RQhRYOj2iNPMMdSAyK30PTI5StsmaoFv0M',
        'Content-Type': 'application/json; charset=utf-8'
    },
  }).then((result) => result.json())
}
