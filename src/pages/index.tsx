import { useEffect } from 'react';
import HomePage from '@/components/HomePage';


export default function Home() {
  useEffect(() => {
    window.addEventListener('error', (e: Event) => {
      // 监听页面错误，js 错误提醒刷新页面
      const { target } = e;
      if (!(target instanceof HTMLElement)) return;
      if (target) {
        const { nodeName } = target;
        if (nodeName === 'SCRIPT') {
          let r = confirm('文件加载错误，请刷新页面');
          if (r == true) {
            location.reload();
          }
        }
      }
    }, true);
  }, []);


  return (
    <HomePage />
  );
}
