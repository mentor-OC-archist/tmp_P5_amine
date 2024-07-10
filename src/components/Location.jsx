import React from 'react'

export default function Location({logements}) {
    return <>
        {logements.length > 0 ? (
            <ul>
                {logements.map(logement => (
                <li key={logement.id}>
                    <h2>{logement.title}</h2>
                    <img src={logement.cover} alt={logement.title} />
                    <p>{logement.description}</p>
                </li>
                ))}
            </ul>
        ) : (
            <p>Chargement des logements...</p>
        )}
    </>
}
