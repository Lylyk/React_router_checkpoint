import React from 'react'
import MovieCard from './MovieCard'
import {Movies} from './Movies'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Description(props) {
    const {name} = useParams()
    const movie = Movies.find(movie => movie.name === name)
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/movies`)

    }

    return (
    <div className='container-fluid vh-100 vw-100 bg-red '>
        <div className="container text-center">
            <div className="row align-items-start gap-3">
                <div className="col w-25">
                    <MovieCard Film={movie} hideDesc={false} />
                    <button onClick={handleClick} > Retour</button>
                    
                </div>
                <div className="col w-75">
                <iframe
                            width="100%"
                            height="400"
                            src={movie.video}  
                            title={movie.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                ></iframe>
                </div>
            </div>
        </div>
    </div>
)
}
export default Description