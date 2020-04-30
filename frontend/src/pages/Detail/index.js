import React from 'react';
import {useHistory} from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi';
import { FaWhatsapp, FaMailBulk } from 'react-icons/fa';
import './style.css'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'



function Profile() {
    
    const history = useHistory()
    
    
    const incidentCity = localStorage.getItem('incidentCity');
    const incidentUf = localStorage.getItem('incidentUf');
    const incidentName = localStorage.getItem('incidentName');
    const incidentTittle = localStorage.getItem('incidentTittle');
    const incidentDescription = localStorage.getItem('incidentDescription');
    const incidentValue = localStorage.getItem('incidentValue');
    const incidentWhatsapp = localStorage.getItem('incidentWhatsapp');
    const incidentEmail = localStorage.getItem('incidentEmail');

    

    console.log('incident')

      
    
 

        function handleLogout() {
            localStorage.clear();
            history.push('/incidents');}
   
        
   
  return (
    <div className="profile-container">
        <div className="content">
            <header>
                <div>
                    <img src={logoImg} alt="Be The Hero"/>
                </div>
            <button onClick={() => handleLogout()} type="button"><FiArrowLeft size={18} color="#e02041"/></button>
            </header>
            <h1>Salve o dia! e seja o héroi desse caso.</h1>
            
            <ul>
                
                <li>
                    <strong>ONG:</strong>
                    <p>{incidentName}</p>
                    <strong>LOCAL:</strong>
                    <p>{incidentCity}/{incidentUf}</p>
                    <strong>CASO:</strong>
                    <p>{incidentTittle}</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidentDescription}</p>
                    <strong>Valor:</strong>
                    <div className="footer-container">
                        <p>{Intl.NumberFormat('pt-BR',  {style: 'currency', currency:'BRL'}).format(incidentValue)}</p>
                    </div>
                    <div className="contact-container">
                        <a href={`https://wa.me/${incidentWhatsapp}`} type="button"><FaWhatsapp size={35} color="#e02041"/></a>
                        <a href={incidentEmail} type="button"><FaMailBulk size={35} color="#e02041"/></a>
                    </div>
                </li>

                
                    <img src={heroesImg} alt="Be The Hero"/>
                   

            </ul>
            
            

        </div>
    </div>
  );
}

export default Profile;