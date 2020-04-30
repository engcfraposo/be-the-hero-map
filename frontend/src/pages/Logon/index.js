import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import api from '../../services/Api'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

export default function Logon() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {

      const response = await api.post('sessions', {email, password});
      
      localStorage.setItem('ongName', response.data.name)
      localStorage.setItem('ongId', response.data._id);

      history.push('/profile')

    } catch (err){
      alert('Falha no login, tente novamente.')
    }
  }




  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be the Heroes"/>
        <form onSubmit={handleLogin}>
          <h1>E-mail</h1>
          <input 
          placeholder="Seu e-mail"
          value={email}
          onChange={ e => setEmail(e.target.value)}
          />
          <h1>Senha</h1>
          <input 
          type="password" 
          placeholder="Senha"
          value={password}
          onChange={ e => setPassword(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
        <div className="list-container">
        <img src={heroesImg} alt="Heroes"/>
          <div className="button-container">
              <Link to="incidents" className="button"  style={{width: 290}} >Lista de casos</Link>
              <Link to="map" className="button" style={{width: 290}} > Mapa de Ong's</Link>
          </div>
        </div>
    </div>
  );
}
