import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';

const GlobalCount = {
  value: 1,
};
const EffectDemo = () => {
  const [show, setShow] = useState<boolean>(true);
  const [count, setCount] = useState(() => 10);

  const onHidden = () => {
    setShow(false);
  };

  const onShow = () => {
    setShow(true);
  };

  const update = () => {
    setCount((val) => { return val + 1; });
  };

  return (
    <div>
      <div>effect</div>
      <CountClick open={show} onClose={onHidden} />
      <Button type="primary" onClick={onShow}>show</Button>
      <Button type="primary" onClick={update}>update parent</Button>
    </div>
  );
};

const CountClick = (props) => {
  const { open, onClose } = props;
  const [count, setCount] = useState(0);

  console.log('child render');


  useEffect(() => {
   console.log('CountClick mounted');

    return () => {
      console.log('unmount');
    };
  }, []);


  const addCount = () => {
    GlobalCount.value += 1;
    setCount(GlobalCount.value);
  };
  return (<Modal open={open} width={600} onCancel={onClose}>
    <div onClick={addCount}>click{GlobalCount.value}</div>;
    <ModalChild />
  </Modal>);
};

const ModalChild = () => {
  useEffect(() => {
    return () => {
      console.log('ModalChild destoryed');
    };
  }, []);
  return <>child</>;
};

export default EffectDemo;
