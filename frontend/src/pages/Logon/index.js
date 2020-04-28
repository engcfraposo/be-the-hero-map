import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be the Heroes"/>
        <form>
          <h1>E-mail</h1>
          <input placeholder="Seu e-mail"/>
          <h1>Senha</h1>
          <input type="password" placeholder="Senha"/>
          <button type="submit" className="button">Entrar</button>
          <a href="/register" className="back-link">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </a>
        </form>
      </section>
        <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
