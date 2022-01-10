import Styled from "styled-components";
import Contact from "./Componets/contact";
import Games from "./Componets/games";
import Resume from "./Componets/resume";
import Title from "./Componets/Title";

const MainContainer = Styled.div`
display: flex;
`
const MainRow = Styled.div`
display: column;
`
const SideRow = Styled.div`
margin-top: 500px;
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
      </SideRow>

    </MainContainer>
  );
}

export default App;
