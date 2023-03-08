import { useState } from 'react';
import logo from '@/assets/logo.jpeg';
import styles from './index.module.css';
import { history } from 'ice';

export default function Home() {
  const [count, setCount] = useState(1);

  const updateCount = () => {
    setCount((c) => c + 1);
  };

  const jumpToAnotherPage = () => {
    history?.push('/ice-admin/404/');
  };

  const jumpToBlog = () => {
    history?.push('/ice-admin/blog/');
  };

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>Hello ice.js 3</p>
      </header>
      <main>
        <button className={styles.button} type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
        <p>
          <a
            onClick={jumpToAnotherPage}
            rel="noopener noreferrer"
            className={styles.link}
          >
            页面跳转
          </a>
          <a
            onClick={jumpToBlog}
            rel="noopener noreferrer"
            className={styles.link}
          >
            blog
          </a>
          {' | '}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            学习 ice.js
          </a>
        </p>
      </main>
    </div>
  );
}
