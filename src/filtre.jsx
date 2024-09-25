import React from 'react'

function Filtre({setCritere}) {
    return (
        <div className="d-flex justify-content-around mb-4">
            <input
                type="number"
                placeholder="Filter by rating"
                min="1"
                max="5"
                onChange={(e) => setCritere(e.target.value)}
            />
        </div> 
        )
}

export default Filtre