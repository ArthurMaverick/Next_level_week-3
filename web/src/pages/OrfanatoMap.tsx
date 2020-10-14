import React, {useEffect, useState} from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {Map, TileLayer, Marker , Popup} from 'react-leaflet'

import '../styles/pages/orfanato-map.css'
import mapIcon from '../utils/mapIcon'
import api from '../services/ap';

const urlMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token='

interface Orfanato {
  id: number
  latitude: number
  longitude: number
  name: string
}

function OrfanatoMap() {
  const [orfanatos, setOrfanatos] = useState<Orfanato[]>([])

    
  useEffect(() => {
    api.get('orfanatos').then(response => {
      setOrfanatos(response.data)
      // console.log(response.data[0].latitude);
    });
  }, []);
  
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="marcador"/>
            
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita </p>

        </header>

        <footer>
        
          <strong>Rio de Janeiro</strong>
          <span>Angra dos Reis</span>

        </footer>
      </aside>

      <Map
        center={[-22.9387205,-44.4028928]}
        zoom={11}
        style={{width: '100%', height: '100%'}}
        >
        <TileLayer url={`${urlMap}${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        
        {orfanatos.map(orfanato =>{
          return (
            
            <Marker
            icon={mapIcon}
            position={[orfanato.latitude, orfanato.longitude]}
            key={orfanato.id}
            >
            
            
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
            {orfanato.name}
            <Link to={`orfanatos/${orfanato.id}`}>
              <FiArrowRight size={20} color='#fff'/>
            </Link>
          </Popup>

        </Marker>
          )
        })}
      </Map>

      <Link to="/orfanatos/create" className="create-orfanato">
        <FiPlus size="32" color="#fff"/>
      </Link>
    </div>
  )
}


export default OrfanatoMap;
