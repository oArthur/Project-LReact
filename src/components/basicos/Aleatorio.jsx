import React from 'react';

export default props => {

    const { min, max } = props;
    const numeroAleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor aleatorio</h2>
            <p><strong>Valor Minimo: </strong> {min}</p>
            <p><strong>Valor Maximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {numeroAleatorio}</p>
        </div>
    )
}
