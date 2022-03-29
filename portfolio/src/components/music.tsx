import React from 'react'
import ReactPlayer from "react-player"
import Styled from 'styled-components'


const MainContainer = Styled.div`
height: 150px;
width: 150px;
padding: 15px;
margin: 13px;
`

const MusicContainer = Styled.div`
margin-top: 25px;
`

const Title = Styled.h2`
color: rgb(0, 173, 181);
`



const Music = () => {
    return (
        <MainContainer>
            <Title>Music </Title>\
            < MusicContainer >
                <ReactPlayer
                    url="https://soundcloud.com/azus-music/azus-x-n0body-cares-heartbeat-2"
                    height="250px"
                    width="300px"
                />
            </MusicContainer>

            < MusicContainer >
                <ReactPlayer
                    url="https://soundcloud.com/azus-music/last-mistake"
                    height="250px"
                    width="300px"
                />
            </MusicContainer>

            < MusicContainer >
                <ReactPlayer
                    url="https://soundcloud.com/azus-music/you-got-me-1"
                    height="250px"
                    width="300px"
                />
            </MusicContainer>

            < MusicContainer >
                <ReactPlayer
                    url="https://soundcloud.com/azus-music/dont"
                    height="250px"
                    width="300px"
                />
            </MusicContainer>

        </MainContainer>
    )
}

export default Music
