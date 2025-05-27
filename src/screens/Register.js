import { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { useAuthentication } from '../hooks/useAuthentication';

const Register = () => {
  useEffect(() => {
    document.title = "Prime Burger - Cadastrar"
  }, []);

  const [displayName, setName] = useState('');
  const [displayEmail, setEmail] = useState('');
  const [displayPassword, setPassword] = useState('');
  const [displayConfirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      displayEmail,
      displayPassword
    }

    if (displayPassword !== displayConfirm) {
      setError("As senhas precisam ser iguais!")
      return
    }
    const res = await createUser(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }    
  }, [authError]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Crie sua conta</h2>
        <p>Junte-se à BurgerMu e aproveite nossas ofertas exclusivas</p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>
            <input 
              type="text" 
              name="displayName" 
              required 
              placeholder="Nome completo" 
              value={displayName} 
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
            />
          </label>
        </div>
        
        <div className={styles.formGroup}>
          <label>
            <input 
              type="email" 
              name="displayEmail" 
              required 
              placeholder="Seu melhor e-mail" 
              value={displayEmail} 
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
          </label>
        </div>
        
        <div className={styles.formGroup}>
          <label>
            <input 
              type="password" 
              name="displayPassword" 
              required 
              placeholder="Crie uma senha" 
              value={displayPassword} 
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </label>
        </div>
        
        <div className={styles.formGroup}>
          <label>
            <input 
              type="password" 
              name="displayConfirm" 
              required 
              placeholder="Confirme sua senha" 
              value={displayConfirm} 
              onChange={(e) => setConfirm(e.target.value)}
              className={styles.inputField}
            />
          </label>
        </div>
        
        {error && <p className={styles.errorMessage}>{error}</p>}
        
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Criando conta...' : 'Cadastrar'}
        </button>
        
        <div className={styles.loginLink}>
          Já tem uma conta? <a href="/login">Faça login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;