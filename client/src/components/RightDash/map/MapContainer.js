import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../../keys';
import styles from './MapContainer.css';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} 
        style={{width: '66%', height: '90vh'}}
        zoom={14}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
        
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (keys.maps)
})(MapContainer)