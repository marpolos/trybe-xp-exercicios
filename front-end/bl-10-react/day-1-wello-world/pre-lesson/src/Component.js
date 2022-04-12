//Na pasta src , crie um arquivo chamado Component.js crie um componente que retorne um <h1> com o seu nome um paragráfo, <p> , com uma breve descrição sobre você.

import React from "react";

//Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um <div> .
class Component extends React.Component {
    render() {
        return (
    <div>
    <h1> Marcelle Monteiro </h1>
    <p> Estudante de desenvolvimento web fullStack </p>
    </div>
        );
    }
}
export default Component;