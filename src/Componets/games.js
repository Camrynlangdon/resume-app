import React, { Component } from 'react'
import Styled from 'styled-components'
import Runner_2D from './Images/2D_Platformer.png'
import DuelStickShooter from './Images/duelStickShooter.PNG'
import automation from './Images/automation.PNG'

const MainContainer = Styled.div`
display: column;
margin: 15px;
`

const GameContainer = Styled.div`
display: flex;
border: solid;
border-radius: 15px;
padding: 20px;
margin-top: 15px;
max-width: 700px;
`

const Image = Styled.img`
height:200px;
width: 300px;
border-radius: 7px;
`

const Information = Styled.div`
display: column;
padding: 13px;
`

const Languages = Styled.div`

display: flex;
`

const CodingLanguages = Styled.div`
display: flex;
align-items: center;
background-color: rgb(57, 62, 70);
height: 10px;
padding: 12px;
margin: 5px;
border-radius: 50px;
color: white;
`


const games = () => {

    return (
        <MainContainer>
            <GameContainer>
                <Image src={automation} />

                <Information>

                    <h2>Automation</h2>

                    <Languages>
                        <CodingLanguages>
                            C#
                        </CodingLanguages>
                        <CodingLanguages>
                            Unity 3D
                        </CodingLanguages>
                    </Languages>

                    <p>Automate from raw ore into more advanced items using machines and conveyor belts!</p>
                </Information>

            </GameContainer>

            <GameContainer>
                <Image src={DuelStickShooter} />

                <Information>

                    <h2>Nightmare Nightmare</h2>

                    <Languages>
                        <CodingLanguages>
                            C#
                        </CodingLanguages>
                        <CodingLanguages>
                            Unity 3D
                        </CodingLanguages>
                    </Languages>

                    <p>Battle your way though waves of enemies using different power ups and weapons!</p>
                </Information>

            </GameContainer>

            <GameContainer>
                <Image src={Runner_2D} />

                <Information>

                    <h2>2D Platformer</h2>

                    <Languages>
                        <CodingLanguages>
                            C#
                        </CodingLanguages>
                        <CodingLanguages>
                            Unity 3D
                        </CodingLanguages>
                    </Languages>

                    <p>Jump and dodge past sawblades and rock people to reach the finish line!</p>
                </Information>

            </GameContainer>

        </MainContainer>
    )

}

export default games
