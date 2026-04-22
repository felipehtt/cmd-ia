
import React, { useState } from 'react';
import './index.scss';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__left">
                    <span className="login-card__tag">Acesso seguro</span>
                    <h1>Bem-vindo de volta</h1>
                    <p>
                        Entre com seu e-mail e senha para acessar sua conta.
                    </p>
                </div>

                <div className="login-card__right">
                    <h2>Login</h2>

                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="seuemail@empresa.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <div className="password-field">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Digite sua senha"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? 'Ocultar' : 'Mostrar'}
                                </button>
                            </div>
                        </div>

                        <div className="form-options">
                            <label>
                                <input type="checkbox" /> Lembrar de mim
                            </label>
                            <a href="#">Esqueci minha senha</a>
                        </div>

                        <button type="submit" className="login-button">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
