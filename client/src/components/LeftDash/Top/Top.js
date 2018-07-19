import React from 'react';
import styles from './Top.css';
import Battery from '../../../img/battery.svg';

const Top = () => {
  return(
    <div className={styles.Top}>
      <div className={styles.Gear}>P</div>
      <div className={styles.BatteryContainer}>
        <p>18%</p>
        <img className={styles.Battery} src={Battery} />
      </div>
      <hr />
    </div>
  )
}

export default Top;