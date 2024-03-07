import React, { useState } from 'react';

function SorteadorNomes() {
  const [nomes, setNomes] = useState([]);
  const [nomeSorteado, setNomeSorteado] = useState('');

  const handleChange = (e) => {
    setNomeSorteado(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNomes([...nomes, nomeSorteado]);
    setNomeSorteado('');
  };

  const sortearNome = () => {
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];
    alert(`O nome sorteado é: ${nomeSorteado}`);
  };

  return (
    <div>
      <h2>Sorteador de Nomes</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Insira um nome:
          <input type="text" value={nomeSorteado} onChange={handleChange} />
        </label>
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={sortearNome}>Sortear Nome</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default SorteadorNomes;
