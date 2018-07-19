import React, { Component } from 'react';
import Top from './Top/Top';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import styles from './LeftDash.css';

class LeftDash extends Component {
  render() {
    return(
      <div className={styles.LeftDash}>
        <Top />
        <Middle />
        <Bottom />
      </div>
    )
  }
}

export default LeftDash;