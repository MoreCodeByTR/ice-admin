import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';

export default function Home() {
  const handleClick = () => {
    alert('404 Forbidden');
  };
  return (
    <div className={styles.app} onClick={handleClick}>
      404 页面
    </div>
  );
}
