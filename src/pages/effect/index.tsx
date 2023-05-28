import { useEffect, useState } from 'react';

const GlobalCount = {
  value: 1,
};
const EffectDemo = () => {
  useEffect(() => {
    console.log(GlobalCount.value, 'GlobalCount');
  }, [GlobalCount.value]);

  return (
    <div>
      <div>effect</div>
      <CountClick />
    </div>
  );
};

const CountClick = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    GlobalCount.value += 1;
    setCount(GlobalCount.value);
  };
  return <div onClick={addCount}>click{GlobalCount.value}</div>;
};

export default EffectDemo;
