import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import './style.css'

import logoImg from '../../assets/logo.svg'
import api from '../../services/Api'



function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');  
  const history = useHistory()
  const ongId = localStorage.getItem('ongId'); 
   
  async function handlerNewIncident(e) {
    e.preventDefault()
  
  const data = {
    title,
    description,
    value,
  }
  try {
    await api.post('incidents', data, {headers:{
      Authorization: ongId,
      /**teste */
  }})
    history.push('/Profile')
} catch (error) {
  alert('Não Cadastrado, tente norvamente!')
}

  }
  
  return (
    <div className="new-incident-container">
        <div className="content">
            <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastro novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#e02041"/>
                Voltar para home
            </Link>
            </section>
            <form onSubmit={handlerNewIncident}>
                <input 
                placeholder="Titulo do Caso"
                value={title}
                onChange={ e => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Descrição"
                value={description}
                onChange={ e => setDescription(e.target.value)}
                />
                <input 
                placeholder="Valor em Reais"
                value={value}
                onChange={ e => setValue(e.target.value)}
                />
                
                <button className="button" type="submit">Cadastrar</button>
            </form>

        </div>
    </div>

  );
}

export default NewIncident;