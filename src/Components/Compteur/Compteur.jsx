import React, { useState } from 'react'

export default function Compteur() {

    const [compteur,setCompteur] = useState(0)


    const handleInc = () => {
        setCompteur(compteur+1)
    }
    const handleDec = () => {
        setCompteur(compteur-1)
    }
    return (
        <>
            <h1>Compteur</h1>

            <div>
                <button onClick={handleInc}>+</button>
                <span style={{ margin: '5px' }}>{compteur}</span>
                <button onClick={handleDec}>-</button>
            </div>

        </>
    )
}
