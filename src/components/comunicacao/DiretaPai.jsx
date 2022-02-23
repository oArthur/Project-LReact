import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junin" idade={18} maior={true} />
            <DiretaFilho nome="Cleber" idade={10} maior={false} />
        </div>
    )
}