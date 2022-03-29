import React from 'react';
import Styled from 'styled-components';
import Blog from '../../views/Blog'
import { StaticImage } from "gatsby-plugin-image"


const ImageDiv = Styled.div`
    max-width: 100%;
`


const AutomationBlog = () => {
    return <Blog title="Automation"
        description="Automate from raw ore into more advanced items using machines and conveyor belts!"
        technologies={["Unity3D", "C#", "Ableton"]}
    >
        <h2>Class Structure:</h2>
        <p>
            “Automation” is a game that I always wanted to make, it is an identical copy to one of my favorite games called “Factorio”, a game that resides in the automated crafting genre.
            In this game, raw ore such as iron, copper, oil, stone, or uranium can be extracted from the ground then processed to make more advanced items such as computer chips, steel, and plastics to name a few until you eventually arrive at making a full-scale rocket.
            This game is a little unique as machines need to update themselves over time without being triggered by the player.
            With so many machines updating every frame, it can easily run into performance issues, however, I design this game to run in a specific update structure to avoid unnecessary calculations bogging down the time it takes to update every machine.
        </p>
        <p>
            Grid - The grid class is in charge of handling the main update loop.  The main loop updates each machine type in a predetermined order (Conveyor Belts {'>'} Robotic Arms {'>'} Miners {'>'} Assemblers) every frame (fixed at 60 frames per second to avoid going too fast).  Every machine that is placed by the player is stored in a 2D array with the location of placement as a coordinate.
        </p>
        <p>
            ConveyorBeltLinks - The most difficult part of making this game was by far the conveyor belts.  When placing a line of belts, each updated item needs to move forward at a consistent speed until backed up at the end.  If each belt is updated separately, items behind another item can try to move forward but stopped because the forward item is in the way until it has its own turn to update, this makes for a jarring experience that will only move the forward item and not both at the same time.  The solution is for connecting belts to form a link that acts as one single belt so the update loop knows to update from the front first making everything move seamlessly forward.
        </p>
        <p>
            RoboticArm - Probably my favorite part of this game, a mechanical factory arm that grabs items from different types of machines to place on either a conveyor belt or another machine.  Most of the code here involves the movement of the arm itself, items are picked up by the clamp attached to the mechanical arm, then the arm itself rotates 180 degrees and drops the item and resets to pick up the next item.
        </p>
        <ImageDiv>
            <StaticImage src="../../images/AutomationClassStructure.PNG" alt="Programming class structure of the automation project" />
            <StaticImage src="../../images/AutomationMap.png" alt="Programming project architecture map for the automation project" />
        </ImageDiv>
    </Blog>
}

export default AutomationBlog;