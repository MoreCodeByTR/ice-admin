import { Button } from 'antd';
import { useRef } from 'react';

const RefDemo = () => {
  const inputRef = useRef<any>(null);
  return (<div>
    <input
      ref={inputRef}
      onChange={() => {
      console.log(inputRef.current.value);
    }}
    />
    <Button onClick={() => {
      console.time();
      inputRef.current.focus();
      console.timeEnd();
    }}
    >focus</Button>
  </div>);
};

export default RefDemo;