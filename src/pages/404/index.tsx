import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';

export default function Home() {
  const [count, setCount] = useState(1);

  const updateCount = () => setCount((c) => c + 1);
  return <div className={styles.app}>404 页面</div>;
}
