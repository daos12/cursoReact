import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo';

function App() {
  return (
    <div>
      <Titulo/>

      {/*Adicionando Imagens */}
      <div>
        <img src="/img1.jpg" alt="Foto do melhor professor" /> {/*Sempre adcione uma descrição */}
      </div>

    </div>
  );
}

export default App;