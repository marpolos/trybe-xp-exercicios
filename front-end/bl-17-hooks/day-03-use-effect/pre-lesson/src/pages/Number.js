import React, { useState, useEffect } from 'react';

/* A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
A mensagem de acerto é removida 4 segundos depois de ser exibida;
O timer é removido quando o componente é desmontado. */

function Number() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);
    
  const newNumber = () => {
    const num = Math.floor(Math.random() * 100);
    setNumber(num);
    setVisible(num % 3 === 0 || num % 5 === 0);
  };

  const numberUpdate = () => {
    setVisible(false);
  }
  
  const TEN_SECONDS = 10000;
  const FOUR_SECONDS = 4000;

  useEffect(() => {
      newNumber();
    setInterval(newNumber, TEN_SECONDS);
    setInterval(numberUpdate, FOUR_SECONDS);
    return () => {
        console.log('Chamei a função')
    }
  }, []);

  /* useEffect(() => () => 
  clearInterval(newNumber));
 */
  return (
    <>
    <p>{ number }</p>
    { visible && <p>Acerto</p> }
    </>
  );
}

export default Number;
