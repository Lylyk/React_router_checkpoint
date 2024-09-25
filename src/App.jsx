import {Routes, Route, Navigate} from 'react-router-dom';
import MoviePage from './MoviePage';
import Description from './Description'
function App() {
  return (
    <div className='w-screen min-h-screen ' >
          <Routes>
            <Route path="/" exact element={<Navigate to='/movies' />} />
            <Route path="/movies" element={<MoviePage/>} />
            <Route path="/movies/:name" element={<Description/>} />
          </Routes>
    </div>
  )
}

export default App