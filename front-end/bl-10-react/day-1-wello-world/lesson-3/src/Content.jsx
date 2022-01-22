import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composição de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composição de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ]

class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                {
                    conteudos.map(({conteudo, bloco, status }) => (
                        <div key={conteudo} className='card'>
                            <h4>{`Conteúdo: ${conteudo}`}</h4>
                            <p>{`Bloco: ${bloco}`}</p>
                            <p>{`Status: ${status}`}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Content;