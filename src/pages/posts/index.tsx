import Head from 'next/head';
import React from 'react';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>breve paragrafo</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>breve paragrafo</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Titulo</strong>
            <p>breve paragrafo</p>
          </a>
        </div>
      </main>
    </>
  );
}