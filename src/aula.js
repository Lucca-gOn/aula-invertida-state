// Importações necessárias.
import logo from './logo.svg';           // Importa a imagem do logo.
import './aula-invertida.css';           // Importa o CSS para estilização.
import { useState } from 'react';        // Importa o hook useState do React.

function AulaInvertida() {
  // Objeto onde você armazena os valores das propriedades que pertencem ao componente.

  // Capturar os valores retornados por useState.
  // Inicialização do estado "contagem" com valor 0.
  const [contagem, setContagem] = useState(0);

  //Contagem: Variável que armazena o valor atual do estado. Neste caso, é inicializado com o valor 0.
  //setContagem: É a função que você usa para atualizar o valor de contagem. Quando você chama setContagem, o componente é renderizado com o novo valor do estado.

  // Incrementar o valor de "contagem".
  function incrementar() {
    setContagem(contagem + 1);
  };

  // Renderização do componente.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Exibe o valor atual de "contagem". */}
        <p className='contagem'>Contagem: {contagem}</p>
        
        {/* Botão que, ao ser clicado, chama a função "incrementar" para aumentar a contagem. */}
        <button onClick={incrementar}>Incrementar</button>
      </header>
    </div>
  );
}

// Exporta o componente para que possa ser usado em outras partes da aplicação.
export default AulaInvertida;
