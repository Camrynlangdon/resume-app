import '../styles/global.css';
import React from 'react';
import Styled from 'styled-components';
import Contact from '../components/contact';
import Education from '../components/Education';
import Games from '../components/games';
import Music from '../components/music';
import Title from '../components/Title';

import Layout from '../components/layout';

const Heading = Styled.div`
  width: 100%;
  max-width: 1191px;
  margin-top: 60px;
`;

const Main = Styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const MainColumn = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15px;
  width: 100%;
`;

const SideColumn = Styled.div`
  padding: 15px;
  width: 305px;

  @media (min-width: 601px){
    margin-top: 60px;
  }
`;

function App() {
  return (
    <Layout>
      <Heading>
        <Title />
      </Heading>
      <Main>
        <MainColumn>
          <Contact />
          <Games />
        </MainColumn>
      </Main>
    </Layout>
  );
}

export default App;
