import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export const SignInButton: React.FC = () => {
  const [session] = useSession();

  return session ? (
    <button onClick={() => signOut()} className={styles.signInButton}>
      <FaGithub className={styles.loggedIn} />
      {session.user.name}
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button onClick={() => signIn('github')} className={styles.signInButton}>
      <FaGithub className={styles.loggedOut} />
      Sign In with GitHub
    </button>
  )
}