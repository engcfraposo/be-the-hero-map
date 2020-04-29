import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import './style.css'

import logoImg from '../../assets/logo.svg'
import api from '../../services/Api'


function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] =  useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    );

  }, []);

  async function handlerRegister(e){
    e.preventDefault()
    const data = {
      name,
      cnpj,
      address,
      password,
      cep,
      city,
      uf, 
      email, 
      whatsapp, 
      latitude,
      longitude,
    };
    
    try{
    const response = await api.post('ongs', data)
      alert(`Seu ID de Acesso: ${response.data.id}`)
      history.push('/')
    } catch (err){
      alert('Não Cadastrado, tente norvamente!')
    }
            
  }

  return (
    <div className="register-container">
        <div className="content">
            <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro,entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#e02041"/>
                Já tenho cadastro
            </Link>
            </section>
            <form onSubmit={handlerRegister}>
              
                <input 
                placeholder="Nome da ONG"
                value={name}
                onChange={ e => setName(e.target.value)}
                />

                <input 
                placeholder="CNPJ"
                value={cnpj}
                onChange={ e => setCnpj(e.target.value)}
                />

                <input 
                type="email" 
                placeholder="E-mail"
                value={email}
                onChange={ e => setEmail(e.target.value)}
                />

                <input 
                placeholder="Endereço"
                value={address}
                onChange={ e => setAddress(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={ e => setPassword(e.target.value)}
                />

                <input 
                placeholder="CEP"
                value={cep}
                onChange={ e => setCep(e.target.value)}
                />

                <input 
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={ e => setWhatsapp(e.target.value)}
                />

                <div className="input-group">
                
                <input 
                placeholder="Cidade"
                value={city}
                onChange={ e => setCity(e.target.value)}
                />

                <input 
                placeholder="UF" 
                style={{width: 80}}
                value={uf}
                onChange={ e => setUf(e.target.value)}
                />
                </div>

                <div className="input-group">
                
                <input 
                placeholder="Latitude"
                type="number" 
                name="latitude" 
                id="latitude" 
                value={latitude}
                onChange={ e => setLatitude(e.target.value)}
                />

                <input 
                placeholder="Longitude"
                type="number" 
                name="longitude"
                id="longitude"  
                value={longitude}
                onChange={ e => setLongitude(e.target.value)}
                />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>

        </div>
    </div>
  );
}

export default Register;