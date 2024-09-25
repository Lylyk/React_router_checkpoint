import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './Movies'
import MovieList from './MovieList'
import Filtre from './filtre'


function App() {
const [movies, setMovies] = useState([])
const [critere, setCritere] = useState(0)
let valeursTries = []

useEffect(() => {
    setMovies(Movies)
} , [])

useEffect(() => {
  console.log(critere)
  valeursTries = movies.filter(movie => movie.note == critere)
} , [critere])

const Ajouter =() => {
  let newFilm = {}
  newFilm.name = prompt('Nom du film');
  newFilm.description = prompt('Description du film');
  newFilm.note = prompt('Note du film (0-5)');
  newFilm.image = prompt('Image du film');
  console.log(newFilm)
  setMovies([...movies, newFilm])
}

  return (
    <>
        <button onClick={Ajouter}>Ajouter un film</button>
        <Filtre setCritere= {setCritere} />
        <MovieList Movies={movies.filter(movie => movie.note == critere)} />
    </>
  )
}

export default App
