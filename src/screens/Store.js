import { useState, useEffect } from 'react';
import style from './Loja.module.css';
import { useAuthentication } from '../hooks/useAuthentication';

const Store = () => {
  useEffect(() => {
    document.title = "Loja";
  }, []);

  const [displayName, setName] = useState('');
  const [displayEndereco, setEndereco] = useState('');
  const [displayCidade, setCidade] = useState('');
  const [displayUF, setUF] = useState('');
  const [error, setError] = useState('');
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      displayEndereco,
      displayCidade,
      displayUF
    }

    const res = await createUser(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={style.registerContainer}>
      <div className={style.formHeader}>
        <h2>Cadastre-se para ter Acesso ao Site</h2>
        <p>Preencha os dados da sua loja</p>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome da Loja"
            value={displayName}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Endereço:</span>
          <input
            type="text"
            name="displayEndereco"
            required
            placeholder="Endereço"
            value={displayEndereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </label>
        <label>
          <span>Cidade:</span>
          <input
            type="text"
            name="displayCidade"
            required
            placeholder="Cidade"
            value={displayCidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </label>
        <label>
          <span>UF:</span>
          <input
            type="text"
            name="displayUF"
            required
            placeholder="UF"
            value={displayUF}
            onChange={(e) => setUF(e.target.value)}
          />
        </label>
        {!loading && <button className={style.btn}>Cadastrar</button>}
        {loading && <button className={style.btn} disabled>Aguarde...</button>}
        {error && <p className={style.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Store;