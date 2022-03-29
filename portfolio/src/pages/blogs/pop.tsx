import React from 'react';
import Styled from 'styled-components';
import Blog from '../../views/Blog'
import { StaticImage } from "gatsby-plugin-image"


const ImageDiv = Styled.div`
    max-width: 100%;
`


const pop = () => {
    return <Blog title="Pop"
        description="Battle your way though waves of enemies using different power ups and weapons!"
        technologies={["Unity3D", "C#", "Ableton"]}
    >
        <h2>Class Structure:</h2>
        <p>
            “Pop” was a game that was a group collaboration with two other people using Git that took place over a few weeks. We started with writing the core of the game mechanics and later wrote around the idea of a 2D web game. For my part of the game, I wrote the mechanics for power-ups, enemy bot interactions, and tons of refactoring for optimizing performance.
        </p>
        <p>
            GameController - This class is the core of the game, it handles things like the main update loop and different active states for the player and enemy to read such as the score, health, time, ammo count, and lives. This class is also responsible for UI elements such as the main menu and pause menu.
        </p>
        <p>
            Player - Here we have an update loop listing for player input on the keyboard and mouse location. The Player class is also responsible for implementing weapons particles that emit from the players that make contact with enemies, doing so triggers functions in the enemies class and removes hit points until complete elimination. When firing different weapons, this class will remove the ammo count until reaching zero and switch back to the default weapon.
        </p>
        <p>
            EnemyAI - Handles the movement of enemies once spawned in by the wave controller, also handles the interactions between enemy to player. The movement of enemies is determined by the position of the player on the game board, the enemy will take the shortest path towards the player in order to make contact. Once an enemy touches the player, it will notify the player class to deduct health or armor.
        </p>
        <p>
            WaveController - This is a crucial class that keeps track of enemy waves that are important for progressing the game forward. The WaveController class has a menu that is within Unity itself that can keep track of each separate wave, enemies count, enemy type, and spawn timing. When triggered, the controller will initialize each enemy separately which will instantly start working as determined by the enemy class.
        </p>
        <ImageDiv>
        <StaticImage src="../../images/pop_Map.png" alt="screenshot of the Pop game" />
        </ImageDiv>
    </Blog>
}

export default pop;