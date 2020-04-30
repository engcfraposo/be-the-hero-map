import React,{ useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {FiPower, FiArrowRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'
import api from '../../services/Api'

import 'leaflet/dist/leaflet.css'
import './styles.css';


function Maps(){
  
  const history = useHistory()

  const [ latitude , setLatitude ] = useState('');
  const [ longitude , setLongitude ] = useState('');
  const [ ongs , setOngs ] = useState([]);

  const myIcon = L.icon({
    iconUrl: logoImg,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

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

  useEffect(() => {
    async function loadOngs(){
      const response = await api.get('ongs');

      setOngs(response.data);

      
    }

    loadOngs();
  }, [])

  function handleLogout() {
    
    history.push('/');}
    
    function handleOng(ong) {
      

      localStorage.setItem('ongId', ong._id);
      localStorage.setItem('ongName', ong.name);

      history.push('/ong')
     
    }
    return (
          
      <div className="profile-container">
        <div className="content">
          <header>
                <div>
                    <img src={logoImg} alt="Be The Hero"/>
                </div>
                <button onClick={() => handleLogout()} type="button"><FiPower size={18} color="#e02041"/></button>  
          </header>
          
          <h1>Ongs Cadastradas</h1>

            <Map className="map" center={[latitude, longitude]} zoom={13}>
              
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {ongs.map( ong => (
                 <Marker 
                 key={ong._id} 
                 position={{
                   lat: ong.location.coordinates[1], 
                   lng: ong.location.coordinates[0]
                  }} 
                  icon={myIcon}>
                 
                  <Popup>
                    <button className="border-button" onClick={() => handleOng(ong)} type="button">
                      <img src={logoImg} style={{width: 50}} alt="Be The Hero"/>
                      <strong>{ong.name}</strong>
                      <FiArrowRight size={18} color="#e02041"/>
                    </button>
                  </Popup>
                
               </Marker>
              ))}

            </Map>
          </div>
        </div>
    );
  }

  export default Maps;