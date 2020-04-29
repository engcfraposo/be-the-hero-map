import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {FiPower} from 'react-icons/fi';
import './style.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/Api'


function Profile() {
    
    const history = useHistory()
    
    const [ incidents , setIncidents ] = useState([]);

    useEffect(() => {
        async function loadIncidents(){
          const response = await api.get('incidents');
    
          setIncidents(response.data);
        }
    
        loadIncidents();
      }, [])
    
    


        function handleLogout() {
            localStorage.clear();
            history.push('/');}
   
        
   
  return (
    <div className="profile-container">
        <div className="content">
            <header>
                <div>
                    <img src={logoImg} alt="Be The Hero"/>
                    <span>Lista de Casos </span>
                </div>
            <button onClick={() => handleLogout()} type="button"><FiPower size={18} color="#e02041"/></button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                
                {incidents.map( incident => (
                <li key={incident._id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>
                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR',  {style: 'currency', currency:'BRL'}).format(incident.value)}</p>
                </li>
                ))}

            </ul>
            
            

        </div>
    </div>
  );
}

export default Profile;