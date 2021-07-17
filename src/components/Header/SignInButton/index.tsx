import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SignInButton: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    <button onClick={() => setIsUserLoggedIn(false)} className={styles.signInButton}>
      <FaGithub className={styles.loggedIn} />
      Mickael Rocha
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button onClick={() => setIsUserLoggedIn(true)} className={styles.signInButton}>
      <FaGithub className={styles.loggedOut} />
      Sign In with GitHub
    </button>
  )
}