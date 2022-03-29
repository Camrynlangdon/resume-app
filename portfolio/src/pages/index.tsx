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
  /* margin: -8px; */

  a {
    color: ${theme.primary};
    text-decoration: none;
  }
`

const Heading = Styled.div`
`

const Main = Styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const Column = Styled.div`
  display: flex;
  flex-direction: column;
`


function App() {
  return (
    <Page>
      <Heading>
        <Title />
      </Heading>
      <Main>

        <Column>

          <Games />
        </Column>

        <Column>
          <Contact />
          <Education />
          {/* <Music /> */}
        </Column>

      </Main>
    </Page>
  );
}

export default App;
