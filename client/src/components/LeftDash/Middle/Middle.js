import React, { Component } from 'react';
import styles from './Middle.css';
import Tesla from '../../../img/teslatemp.png';

class Middle extends Component {
  render() {
    return(
      <div className={styles.Middle}>
        <img className={styles.Tesla} src={Tesla} />
      </div>
    )
  }
}

export default Middle;