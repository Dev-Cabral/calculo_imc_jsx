import './global.modules.css';
import {  useState } from 'react';

function App() {

  var [altura, setAltura] = useState( );
  var [peso, setPeso] = useState();
  var [baseImc, setBaseImc] = useState( )


  function setCaulcularImc() {
    return  Number(peso) / Number(altura * 2)
  }

  
  return (
    <div className="container">
      <header >
      <h1>Cálculo IMC</h1>
      </header>
          <form className='container'>

          <h3>PESO(kg)</h3>
          <input type="number" 
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required placeholder="Insira seu peso" />

          <h3>ALTURA(m)</h3>
          <input type="number" 
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Insira sua altura" />

          
          <h3>IMC</h3>
          <input type="number"
          value={baseImc}
          onChange={e => setBaseImc(e.target.value)}
          placeholder="Base cálculo" />

          <button type='button'
          value={setCaulcularImc().toFixed(2)}
          onClick={(prevent) => setBaseImc(prevent.target.value)}
          >Calcular</button>
                </form>

            <div  className='table-container'>
              <h2>Classificação</h2>
              <table className='table-container-border'>
                <tr>
                  <th><strong>IMC </strong>(kg/m²)</th> 
                  <th><strong>Classificação</strong></th>
                </tr>
                <tr>
                  <td>Menor que 18,5</td>
                  <td>Magreza</td>
                </tr>
                <tr>
                  <td><strong>18,5 a 24,9</strong></td>
                  <td><strong>Peso normal</strong></td>
                </tr>
                <tr>
                  <td>25 a 29,9</td>
                  <td>Sobrepeso</td>
                </tr>
                <tr>
                  <td>30 a 34,9</td>
                  <td>Obesidade grau I</td>
                </tr>
                <tr>
                  <td>35 a 40</td>
                  <td>Obesidade grau II</td>
                </tr>
                <tr>
                  <td>Maior que 40</td>
                  <td>Obesidade grau III</td>
                </tr>
                </table>
          </div>
      </div>
  )
}

export default App