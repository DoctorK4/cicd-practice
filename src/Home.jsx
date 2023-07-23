import { Button } from './component/button';

export default function Home () {
  return (
    <div>
      <p>Home page 입니다.</p>
      <Button type={'button'} disabled={false}>Click</Button>
    </div>
  );
};