import { Button } from '../components/common';
import { NextPage } from 'next';

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <div>
      <h1>home page</h1>
      <Button>Primary Button</Button>
      <Button secondary>Secondary button</Button>
      <Button large>Large button</Button>
    </div>
  );
};

export default HomePage;
