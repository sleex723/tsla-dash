import React, { Component } from 'react';
import styles from './BottomDash.css';
import Tesla from '../../img/tesla.png';
import Defrost from '../../img/defrost.png';
import Defrost2 from '../../img/defrost2.png';
import SeatLeft from '../../img/seat_left.png';
import AC from '../../img/ac.png';
import SeatRight from '../../img/seat_right.png';
import Music from '../../img/music.png';
import Phone from '../../img/iphone.png';
import Volume from '../../img/volume.png';

class BottomDash extends Component {
  render() {
    return (
      <div className={styles.BottomDash}>
        <img src={Tesla} />
        <img src={Defrost} />
        <img src={Defrost2} />
        <img src={SeatLeft} />
        <div>
          70
        </div>
        <img src={AC} />
        <div>
          70
        </div>
        <img src={SeatRight} />
        <img src={Music} />
        <img src={Phone} />
        <img src={Volume} />
      </div>
    )
  }
}

export default BottomDash;