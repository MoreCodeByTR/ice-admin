import { useState } from 'react';
import logo from '@/assets/logo.jpeg';
import styles from './index.module.css';
import { history } from 'ice';

export default function HomePage() {
  const [count, setCount] = useState(1);
  const [testUrl, setTestUrl] = useState('');

  const loadImg = () => {
    setTestUrl('https://avatars.githubusercontent2.com/u/51108500?s=40&v=4');
  };

  const loadScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://passport.feishu.cn/accounts/auth_login/qr/polling?_r84813=1684659748107';
    document.head.appendChild(script);
  };

  const updateCount = () => {
    loadScript();
    setCount((c) => c + 1);
  };

  const jumpToAnotherPage = () => {
    history?.push('/404');
  };

  const jumpToBlog = () => {
    history?.push('/blog');
  };

  const jumpToForm = () => {
    history?.push('/formily');
  };

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>Hello ice.js 3</p>
      </header>
      <main>
        {testUrl && <img src={testUrl} />}
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
          {' | '}
          <a
            onClick={jumpToBlog}
            rel="noopener noreferrer"
            className={styles.link}
          >
            blog
          </a>
          {' | '}
          <a
            onClick={jumpToForm}
            rel="noopener noreferrer"
            className={styles.link}
          >
            动态表单
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
