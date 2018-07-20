import React, { Component } from 'react';
import LeftDash from './LeftDash/LeftDash';
import BottomDash from './BottomDash/BottomDash';
import RightDash from './RightDash/RightDash';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Main}>
          <LeftDash />
          <RightDash />
        </div>
        <div>
          <BottomDash />
        </div>
      </div>
    );
  }
}

export default App;
