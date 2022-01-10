import Styled from "styled-components";
import Contact from "./Componets/contact";
import Education from "./Componets/Education";
import Games from "./Componets/games";
import Music from "./Componets/music";
import Resume from "./Componets/resume";
import Title from "./Componets/Title";

const MainContainer = Styled.div`
display: flex;
`
const MainRow = Styled.div`
display: column;
`
const SideRow = Styled.div`
margin-top: 450px;
`

function App() {
  return (
    <MainContainer >

      <MainRow>
        <Title />
        <Games />
        <Resume />
      </MainRow>

      <SideRow>
        <Contact />
        <Education />
        <Music />
      </SideRow>

    </MainContainer>
  );
}

export default App;
