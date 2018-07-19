import React, { Component } from 'react';
import styles from './Bottom.css';
import Lens from '../../../img/lens.png';
import Flash from '../../../img/flash.png';
import Wiper from '../../../img/wiper.png';
import Mic from '../../../img/mic.png';

class Bottom extends Component {
  render() {
    return(
      <div className={styles.Bottom}>
        <div className={styles.Menu}>
          <img src={Lens} />
          <img src={Flash} />
          <img src={Mic} />
        </div>
        <div className={styles.Wiper}>
          <button className={styles.WiperButton}>
            <img src={Wiper} />
          </button>
        </div>
      </div>
    )
  }
}

export default Bottom;