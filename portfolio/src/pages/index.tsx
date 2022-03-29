import '../styles/global.css'
import React from 'react';
import Styled from "styled-components";
import Contact from "../components/contact";
import Education from "../components/Education";
import Games from "../components/games";
import Music from "../components/music";
import Title from "../components/Title";

import theme from '../styles/theme'

const Page = Styled.div`
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: -8px; */

  a {
    color: ${theme.primary};
    text-decoration: none;
  }

`



const Heading = Styled.div`
  width: 100%;
  max-width: 1191px;
`

const Main = Styled.div`
  width: 1191px;
  max-width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const MainColumn = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15px;
`

const SideColumn = Styled.div`
  padding: 15px;

  @media (min-width: 601px){
    margin-top: 84px;
  }
`


function App() {
  return (
    <Page>
      <Heading>
        <Title />
      </Heading>
      <Main>

        <MainColumn>

          <Games />
        </MainColumn>

        <SideColumn>
          <Contact />
          <Education />
          {/* <Music /> */}
        </SideColumn>

      </Main>
    </Page>
  );
}

export default App;
