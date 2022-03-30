
import React from 'react';
import Styled from 'styled-components';
import Blog from '../../views/Blog'







function Game2DRunner () {
    return <Blog title="2D Runner!"
        description="Jump and dodge past sawblades and rock people to reach the finish line!"
        technologies={["Unity3D", "C#"]}
    >
        <h2>Used WASD to move {'&'} SPACE BAR to double jump</h2>
        
        {/* <iframe  src="https://itch.io/embed-upload/5507806?color=333333"  width="980" height="580"><a href="https://camrynlangdon.itch.io/2d-runner">Play 2D Runner on itch.io</a></iframe>
         */}
        
        <iframe frameBorder="0" src="https://itch.io/embed-upload/5508117?color=333333" allowFullScreen width="1000" height="950"><a href="https://camrynlangdon.itch.io/2d-runner">Play 2D Runner on itch.io</a></iframe>
         
    </Blog>
}

export default Game2DRunner