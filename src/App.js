import React from 'react';

const BemVindo = (props) => {
    return (
        <div>
            <h2>Bem-vindo(a) {props.nome}</h2>
        </div>
    )
}
function App(){
    return (
        <div>
            Curso React
            <BemVindo nome="Daniel" />
            <h1>Olá mundo</h1>
        </div>
    )
}

export default App