import { useState } from 'react';
import { Button } from './component/Button';

export default function Home () {
  const [ count, setCount ] = useState(0);
  
  const handleClick = () => {
    setCount(count => count+1);
  };

  return (
    <div>
      <p>Home page 입니다.</p>
      <Button type={'button'} disabled={false} onClick={()=>handleClick()}>Click</Button>
      <p>{count}</p>
    </div>
  );
};