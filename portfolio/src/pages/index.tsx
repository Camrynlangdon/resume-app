import React from 'react';
import Styled from "styled-components";
import Contact from "../components/contact";
import Education from "../components/Education";
import Games from "../components/games";
import Music from "../components/music";
import Resume from "../components/resume";
import Title from "../components/Title";

import theme from '../styles/theme'

const Page = Styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.background};
  color: ${theme.text};
  margin: -8px;

  a {
    color: ${theme.primary};
    text-decoration: none;
  }

`

const MainContainer = Styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
`
const MainRow = Styled.div`
  display: column;
  align-items: center;
`
const SideRow = Styled.div`
  margin-top: 450px;
`

function App() {
  return (
    <Page>
      <MainContainer >

        <MainRow>
          <Title />
          <Games />
        </MainRow>

        <SideRow>
          <Contact />
          <Education />
          <Music />
        </SideRow>

      </MainContainer>
    </Page>
  );
}

export default App;
