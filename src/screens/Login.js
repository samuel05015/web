import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regex para verificar o formato do email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }

        if (!password) {
            setError('A senha é obrigatória.');
            return;
        }

        // Lógica de autenticação (exemplo de login)
        setError('');
        console.log('Login realizado com sucesso!');
        // Adicionar lógica de redirecionamento ou autenticação aqui
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <h2>Bem-vindo de volta</h2>
                    <p>Faça login para acessar sua conta</p>
                </div>
                
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.loginInput}
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.loginInput}
                        />
                    </div>
                    
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    
                    <button type="submit" className={styles.loginButton}>
                        Entrar
                    </button>
                    
                    <div className={styles.loginFooter}>
                        <a href="/esqueci-senha" className={styles.forgotPassword}>Esqueceu sua senha?</a>
                        <p>Não tem uma conta? <a href="/cadastro" className={styles.signupLink}>Cadastre-se</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;