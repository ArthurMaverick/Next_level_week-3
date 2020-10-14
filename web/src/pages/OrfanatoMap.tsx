import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {Map, TileLayer, Marker , Popup} from 'react-leaflet'
import Leaflet from 'leaflet'
import '../styles/pages/orfanato-map.css'
import 'leaflet/dist/leaflet.css'

const urlMap = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token='
const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
})

function OrfanatoMap() {

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

        <Marker
          icon={mapIcon}
          position={[-22.9387205,-44.4028928]}
        >
            
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
            lar das meninas
            <Link to="">
              <FiArrowRight size={20} color='#fff'/>
            </Link>
          </Popup>

        </Marker>

      </Map>

      <Link to="" className="create-orfanato">
        <FiPlus size="32" color="#fff"/>
      </Link>
    </div>
  )
}


export default OrfanatoMap;
