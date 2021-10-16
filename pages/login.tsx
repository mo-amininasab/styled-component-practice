import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { Input } from '../components';
import { useState } from 'react';
import PasswordInput from '../components/common/PasswordInput';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

interface Props {}

const LoginPage: NextPage<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          value={username}
          type='text'
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>
    </Layout>
  );
};

export default LoginPage;
