import {useSelector, useDispatch } from 'react-redux';
import React from 'react';

function App() {

  const state = useSelector((state) => state.reducer);
  const nome = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();

  return (
    <div>
      {state}
      <br />
      <br />
      <button onClick={() => dispatch({type: 'SOMAR'})}>
        Adicionar
      </button>
      <button onClick={() => dispatch ({ type: 'SUBTRAIR'})}>
        Remover
      </button>
      <br />
      <br />
  
      <div>
        {nome}
        <br />
        <br />
        <button onClick={() => dispatch({type: 'SOMAR1'})}>
            Adicionar
          </button>
          <button onClick={() => dispatch ({ type: 'SUBTRAIR1'})}>
            Remover
          </button>
      </div>

    </div>

  
  );
}

export default App;