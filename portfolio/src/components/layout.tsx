import React from 'react';
import Styled from 'styled-components';
import theme from '../styles/theme';

import HireMeBanner from './hire-me-banner';

const Page = Styled.div`
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${theme.primary};
    text-decoration: none;
  }
`;

const PageBody = Styled.div`
  width: 800px;
  max-width: 100%;
  margin-top: 60px;
`;

const Layout = ({
  children,
}: {
  children: Array<React.ReactChild> | React.ReactChild;
}) => {
  return (
    <Page>
      <HireMeBanner />
      <PageBody>{children}</PageBody>
    </Page>
  );
};

export default Layout;
