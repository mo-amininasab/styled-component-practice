import { Button } from '../components/common';
import { NextPage } from 'next';

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <div>
      <h1>home page</h1>
      <Button>Test</Button>
    </div>
  );
};

export default HomePage;
