import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2, FiUser} from 'react-icons/fi';
import './style.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/Api'


function Profile() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    
    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id){
       
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
                
            });
           
           history.push('/profile')

        
                   
        }

        function handleLogout() {
            localStorage.clear();
            history.push('/');}
   
        
   
  return (
    <div className="profile-container">
        <div className="content">
            <header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, {ongName} </span>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button onClick={()=> []} type="button"><FiUser size={18} color="#e02041"/></button>
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
                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',  {style: 'currency', currency:'BRL'}).format(incident.value)}</p>
                    <button><FiTrash2 onClick={() => handleDeleteIncident(incident._id)} size={20} color="#a8a8b3"/></button>
                </li>
                ))}
            </ul>
            
            

        </div>
    </div>
  );
}

export default Profile;