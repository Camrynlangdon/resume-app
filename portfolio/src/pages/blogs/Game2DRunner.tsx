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
        <p>“2D Runner” was the first complete Unity project that I worked on.  The project is pretty basic, it has a player class, enemy class, enemy movement class, object movement class, and a game controller class.  The movement is all physics-based meaning the player is pushed in the direction it needs to go and falls with gravity.  My favorite design was the enemy movement, when the player is in the designed zone of that specific enemy, the enemy reacts by reading the player's position and uses a method called lerping to travel from its original position to the player's position to cause damage.  I learned a ton about the Unity codebase working on this project which helped me a ton in working on future projects with others later on.</p>


        <h2>Used WASD to move {'&'} SPACE BAR to double jump</h2>
        
        <GameDiv>
        <iframe frameBorder="0" 
        src="https://itch.io/embed-upload/5561237?color=333333" 
        allowFullScreen width="1300" height="950">
        <a href="https://camrynlangdon.itch.io/2d-runner">
        Play 2D Runner on itch.io</a>
        </iframe>
         
        </GameDiv>

    </Blog>
}

export default Game2DRunner