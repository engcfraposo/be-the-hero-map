import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {FiPower, FiArrowRight} from 'react-icons/fi';
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

    async function handleDetail(incident){
        try {
            
            localStorage.setItem('incidentId', incident._id);
            localStorage.setItem('incidentCity', incident.city);
            localStorage.setItem('incidentUf', incident.uf);
            localStorage.setItem('incidentName', incident.name);
            localStorage.setItem('incidentTittle', incident.title);
            localStorage.setItem('incidentDescription', incident.description);
            localStorage.setItem('incidentWhatsapp', incident.whatsapp);
            localStorage.setItem('incidentEmail', incident.email);
            localStorage.setItem('incidentValue', incident.value);
      
            history.push('detail')
      
          } catch (err){
            
          }

      }
    
      function handleLogout() {
        localStorage.clear();
        history.push('/');}
   
        
   
  return (
    <div className="profile-container">
        <div className="content">
            <header>
            <img src={logoImg} alt="Be The Hero"/>
            <button onClick={() => handleLogout()} type="button"><FiPower size={18} color="#e02041"/></button>
            </header>
            <h1>Casos Cadastrados - {ongName}</h1>
            <ul>
                
                {incidents.map( incident => (
                <li key={incident._id}>
                    <strong>ONG:</strong>
                    <p>{incident.name}</p>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>
                    <strong>VALOR:</strong>
                    <div className="footer-container">
                        <p>{Intl.NumberFormat('pt-BR',  {style: 'currency', currency:'BRL'}).format(incident.value)}</p>
                        <FiArrowRight size={18} color="#e02041" onClick={()=>handleDetail(incident)}/>
                    </div>
                </li>
                ))}
            </ul>
            
            

        </div>
    </div>
  );
}

export default Profile;