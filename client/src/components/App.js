import React, { Component } from 'react';
import LeftDash from './LeftDash/LeftDash';
import BottomDash from './BottomDash/BottomDash';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <LeftDash />
        <BottomDash />
      </div>
    );
  }
}

export default App;
