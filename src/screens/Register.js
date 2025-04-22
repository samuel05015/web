import { useState, useEffect } from 'react';
import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles.container}>
            <h2>Cadastre-se para ter Acesso ao Site</h2>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do Usuário" />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder="E-mail" />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Senha" />
                </label>
                <label>
                    <span>Confirmar Senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Repetir Senha" />
                </label>
                <button className={styles.btnCadastrar}>
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Register;
