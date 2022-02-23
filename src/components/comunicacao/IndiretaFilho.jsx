import React from 'react';

export default props => {
    const cb = props.onClick;
    const min = 20
    const max = 40
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
        return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={function (e){cb('João', gerarIdade(), gerarNerd());}
            }>Fornecer Informacoes</button>
        </div>
    )
}