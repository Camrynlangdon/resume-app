import React, { Component } from 'react'
import Styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import NavLink from './NavLink'

import theme from '../styles/theme'


const MainContainer = Styled.div`
    display: column;
    /* margin: 15px; */
`

const Title = Styled.h2`
    margin-top: 0;
    color: ${theme['text-subheadings']};
`

const GamesColumn = Styled.div`
   
    max-width: 700px;
    display: flex;
    flex-direction: column;
    
    padding-top: 20px;
`
const GameContainer = Styled.div`
    display: flex;
    margin-bottom: 30px;
    

    background-color: ${theme.foreground};
    padding: 20px;
    border-radius: 12px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
   
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
    border-radius: 15px;
    color: white;
    font-size: .9rem;
    margin-right: 4px;
    opacity: .9;
`

const GameDes = Styled.div`
    border: solid;
    border-radius: 15px;
    padding: 20px;
    margin-top: 15px;
    max-width: 700px;
`

const ImageDiv = Styled.div`
    max-width: 100%;
`
const GameTitle = Styled.h4`
    font-size: 1.7rem;
    margin-bottom: 12px;
    margin-top: 12px;
`


const ImageContainer = Styled.div`
    width: 400px;
    max-width: 100%;
    object-fit: cover;
    overflow: hidden;

    img {
        width: 100%;
        border-radius: 12px;
    }

    @media (min-width: 768px) {
        margin-right: 21px;

        /* margin-top: auto;
        margin-bottom: auto;   */
    }
`
const Information = Styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 769px) {
        max-width: 50%;
    }
   
`
const GameDescription = Styled.p`
    word-break: break-word;
`


const games = () => {

    return (
        <MainContainer>
            {/* <Title>Recent Projects</Title> */}

            <GamesColumn>
                <GameContainer>
                    <ImageContainer>
                        <StaticImage src="../images/automation.png" alt="Automation game screenshot" />
                    </ImageContainer>

                    <Information>

                        <GameTitle>Automation</GameTitle>

                        <Languages>
                            <CodingLanguages>
                                C#
                            </CodingLanguages>
                            <CodingLanguages>
                                Unity 3D
                            </CodingLanguages>
                        </Languages>

                        <GameDescription>Automate from raw ore into more advanced items using machines and conveyor belts!</GameDescription>
                        <NavLink href="/blogs/automation" label="Read the blog" />
                    </Information>

                </GameContainer>

                <GameContainer>
                    <ImageContainer>
                        <StaticImage src="../images/game_screenshot_dual_stick_shooter.png" alt="Screenshot of the dual-stick shooter game" />
                    </ImageContainer>
                    <Information>

                        <GameTitle>Pop</GameTitle>

                        <Languages>
                            <CodingLanguages>
                                C#
                            </CodingLanguages>
                            <CodingLanguages>
                                Unity 3D
                            </CodingLanguages>
                        </Languages>

                        <p>Battle your way though waves of enemies using different power ups and weapons!</p>
                        <NavLink href="/blogs/pop" label="Read the blog" />
                    </Information>

                </GameContainer>

                <GameContainer>
                    <ImageContainer>
                        <StaticImage src="../images/game_screenshot_2d_platformer.png" alt="screeshot of the 2d platformer game" />
                    </ImageContainer>
                    <Information>

                        <GameTitle>2D Platformer</GameTitle>


                        <Languages>
                            <CodingLanguages>
                                C#
                            </CodingLanguages>
                            <CodingLanguages>
                                Unity 3D
                            </CodingLanguages>
                        </Languages>

                        <p>Jump and dodge past sawblades and rock people to reach the finish line!</p>
                        <NavLink href="/blogs/Game2DRunner" label="Play the game!" />
                    </Information>

                </GameContainer>
            </GamesColumn>
            

        </MainContainer>
    )

}

export default games
