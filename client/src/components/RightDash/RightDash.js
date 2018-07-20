import React, { Component } from 'react';
import styles from './RightDash.css';
import MapContainer from './map/MapContainer';

class RightDash extends Component { 
  componentDidMount() {

  }
  render() {
    return(
      <div className={styles.RightDash}>
        <MapContainer />
      </div>
    )
  }
}
export default RightDash;