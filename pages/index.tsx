import { Button } from '../components';
import { NextPage } from 'next';
import Layout from '../components/layout/Layout';

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <Layout>
      <p>home page</p>
      <Button>Primary Button</Button>
      <Button secondary>Secondary button</Button>
      <Button large>Large button</Button>
    </Layout>
  );
};

export default HomePage;
