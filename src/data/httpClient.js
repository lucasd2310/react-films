const API = 'https://www.themoviedb.org'

export async function get(path) {
  const result = await fetch(`${API}/${path}`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmTlmzgxZGQ3YjY3ZWVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0tssAAaSppyjRv9anArs',
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
  return await result.json()
}
