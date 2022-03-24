import React, { Component } from 'react'
import Styled from 'styled-components'
import Runner_2D from './Images/2D_Platformer.png'
import DuelStickShooter from './Images/duelStickShooter.PNG'
import automation from './Images/automation.PNG'

const MainContainer = Styled.div`
display: column;
margin: 15px;
`

const Title = Styled.h2`
color: rgb(0, 173, 181);
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

const GameDes = Styled.div`

border: solid;
border-radius: 15px;
padding: 20px;
margin-top: 15px;
max-width: 700px;
`


const games = () => {

    return (
        <MainContainer>
            <Title>Hobby Projects</Title>

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

            <GameDes>
                <h2>Automation</h2>
                <p>
                    “Automation” is a game that I always wanted to make, it is an identical copy to one of my favorite games called “Factorio”, a game that resides in the automated crafting genre.
                    In this game, raw ore such as iron, copper, oil, stone, or uranium can be extracted from the ground then processed to make more advanced items such as computer chips, steel, and plastics to name a few until you eventually arrive at making a full-scale rocket.
                    This game is a little unique as machines need to update themselves over time without being triggered by the player.
                    With so many machines updating every frame, it can easily run into performance issues, however, I design this game to run in a specific update structure to avoid unnecessary calculations bogging down the time it takes to update every machine.
                </p>
                <h2>Class Structure:</h2>
                <p>
                    Grid - The grid class is in charge of handling the main update loop.  The main loop updates each machine type in a predetermined order (Conveyor Belts {'>'} Robotic Arms {'>'} Miners {'>'} Assemblers) every frame (fixed at 60 frames per second to avoid going too fast).  Every machine that is placed by the player is stored in a 2D array with the location of placement as a coordinate.
                </p>
                <p>
                    ConveyorBeltLinks - The most difficult part of making this game was by far the conveyor belts.  When placing a line of belts, each updated item needs to move forward at a consistent speed until backed up at the end.  If each belt is updated separately, items behind another item can try to move forward but stopped because the forward item is in the way until it has its own turn to update, this makes for a jarring experience that will only move the forward item and not both at some time.  The solution is for connecting belts to form a link that acts as one single belt so the update loop knows to update from the front first making everything move seamlessly forward.
                </p>
                <p>
                    RoboticArm - Probably my favorite part of this game, a mechanical factory arm that grabs items from different types of machines to place on either a conveyor belt or another machine.  Most of the code here involves the movement of the arm itself, items are picked up by the clamp attached to the mechanical arm, then the arm itself rotates 180 degrees and drops the item and resets to pick up the next item.
                </p>
            </GameDes>

            <GameDes>
                <h2>Nightmare Nightmare</h2>
                <p>
                    “Nightmare Nightmare” was a game that was a group collaboration with two other people using Git that took place over a few weeks.  We started with writing the core of the game mechanics and later wrote around the idea of a 2D web game.  For my part of the game, I wrote the mechanics for power-ups, enemy bot interactions, and tons of refactoring for optimizing performance.
                </p>
                <h2>
                    Class Structure:
                </h2>
                <p>
                    GameController - This class was is core of the game, it handles things like the main update loop and different active states for the player and enemy to read such as the score, health, time, ammo count, and lives.  This class is also responsible for UI elements such as the main menu and pause menu.
                </p>
                <p>
                    Player - Here we have an update loop listing for player input on the keyboard and mouse location.  The Player class is also responsible for implementing weapons particles that emit from the players that make contact with enemies, doing so triggers functions in the enemies class and removes hit points until complete elimination. When firing different weapons, this class will remove the ammo count until reaching zero and switch back to the default weapon.
                </p>
                <p>
                    EnemyAI - Handles the movement of enemies once spawned in by the wave controller, also handles the interactions between enemy to player.  The movement of enemies is determined by the position of the player on the game board, the enemy will take the shortest path towards the player in order to make contact.  Once an enemy touches the player, it will notify the player class to deduct health or armor.
                </p>
                <p>
                    WaveController - This is a crucial class that keeps track of enemy waves that are important for progressing the game forward.  The WaveController class has a menu that is within Unity itself that can keep track of each separate wave, enemies count, enemy type, and spawn timing.  When triggered, the controller will initialize each enemy separately which will instantly start working as determined by the enemy class.
                </p>
            </GameDes>

        </MainContainer>
    )

}

export default games
