import React, { Component } from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'

const MainContainer = Styled.div`
display: flex;
border: solid;
border-radius: 15px;
padding: 15px;
max-width: 700px;
`


const Image = Styled.div`
background-color: grey;
width: 150px;
height: 150px
padding: 15px;
`
const Infromation = styled.div`
display: column;
padding: 13px;

`

const CodingLanguages = Styled.div`

`


const games = () => {

    return (
        <MainContainer>
            <Image />

            <Infromation>


                <h2>Automation</h2>

                <CodingLanguages>
                    C# Unity 3D
                </CodingLanguages>

                <p>Automate from raw ore into more advanced items using machines and conveyorbelts!</p>
            </Infromation>

        </MainContainer>
    )

}

export default games
