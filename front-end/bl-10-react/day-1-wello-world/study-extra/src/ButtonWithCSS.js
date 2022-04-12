import React from 'react';

import styles from './styles.module.css';
// Para usar um module é preciso por a extensão module.css
// https://www.w3schools.com/react/react_css.asp
const Main = () => (
  <button
    onClick={() => alert('Clicked')}
    className={styles.button}
  >With CSS</button>
);

export default Main;