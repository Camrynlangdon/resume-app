import Styled from "styled-components";
import Contact from "./Componets/contact";
import Education from "./Componets/Education";
import Games from "./Componets/games";
import Music from "./Componets/music";
import Resume from "./Componets/resume";
import Title from "./Componets/Title";

import theme from './theme.json'

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
