
import React from 'react';
import Styled from 'styled-components';
import Blog from '../../views/Blog'


const GameDiv = Styled.div`
    position: relative;
    

    iframe {
        
        width: 100%;
        max-height: 90%
    }

`




function Game2DRunner () {
    return <Blog title="2D Runner!"
        description="Jump and dodge past sawblades and rock people to reach the finish line!"
        technologies={["Unity3D", "C#"]}
    >
        <h2>Used WASD to move {'&'} SPACE BAR to double jump</h2>
        
        
        <GameDiv>

        <iframe frameBorder="0" 
        src="https://itch.io/embed-upload/5508117?color=333333" 
        allowFullScreen width="1000" height="950">
        <a href="https://camrynlangdon.itch.io/2d-runner">
        Play 2D Runner on itch.io</a>
        </iframe>
         
        </GameDiv>

    </Blog>
}

export default Game2DRunner