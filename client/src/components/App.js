import React, { Component } from 'react';
import LeftDash from './LeftDash/LeftDash';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <LeftDash />
      </div>
    );
  }
}

export default App;
