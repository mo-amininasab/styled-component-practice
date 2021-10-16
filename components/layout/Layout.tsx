import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Kaushan Script';
  }
`;

interface Props {
  readonly title?: string;
  readonly keywords?: string;
  readonly description?: string;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  keywords,
  description,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Styled Components',
  description: 'Styled Components Practice',
  keywords: 'styled components, css, programming',
};
