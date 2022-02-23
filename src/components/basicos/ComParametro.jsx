import React from 'react'

export default function ComParametro(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p></p>
            <p>A nota do aluno <strong>{props.aluno}</strong> é:{props.nota}</p>
        </div>
    )
}