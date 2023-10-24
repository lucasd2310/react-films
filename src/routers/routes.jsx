import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'

export function MyRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

