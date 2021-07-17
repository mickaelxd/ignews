import React from 'react';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer} >
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active} href=''>Home</a>
          <a href=''>Posts</a>
        </nav>
      </div>
    </header>
  );
}