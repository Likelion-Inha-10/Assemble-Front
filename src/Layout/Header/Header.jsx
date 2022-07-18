import React from 'react';
import styles from "./Header.module.css";


const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img  className={styles.img} src={'/img/logo.png'} alt="ASSEMBLE"/>
      </header>
    </div>
  );
};

export default Header;