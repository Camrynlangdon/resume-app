import React, { Component } from 'react';
import Styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import theme from '../styles/theme';

import Card from './Card';
import NavLink from './NavLink';
import TechnologiesList from './Technologies-list';


const GamesList = Styled.ul`
    padding: 0;
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const GameContainer = Styled.div`
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
   
`;

const GameTitle = Styled.h4`
    font-size: 1.7rem;
    margin-bottom: 12px;
    margin-top: 12px;
`;

const ImageContainer = Styled.div`
    width: 350px;
    max-width: 100%;
    object-fit: cover;
    overflow: hidden;

    img {
        width: 100%;
        border-radius: 12px;
    }

    @media (min-width: 768px) {
        margin-right: 21px;
    }
`;

const Information = Styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 769px) {
        max-width: 50%;
    }
   
`;
const GameDescription = Styled.p`
    word-break: break-word;
    margin-top: 20px;
`;
const GameItemListItem = Styled.li`
   
`;

type GameItemProps = {
  image: React.ReactElement; // image component
  title: string; // name of the game
  technologies: Array<string>; // technologies used ex. ["git", "javascript"]
  description: string; // quick description of the game itself. "A game where two players attack..."
  content?: React.ReactNode; // technical details about your involvement in the project
  blogPath: string; // blog page path ex. 'automation'
};


const GameItem = ({
  image,
  title,
  technologies,
  description,
  content,
  blogPath,
}: GameItemProps) => {
  return (
    <GameItemListItem>
      <Card>
        <GameContainer>
          <ImageContainer>{image}</ImageContainer>
          <Information>
            <GameTitle>{title}</GameTitle>
            {technologies && <TechnologiesList technologies={technologies} />}
            <GameDescription>{description}</GameDescription>
            {content && <div>{content}</div>}
            {blogPath && <NavLink href={blogPath} label="Read the blog" />}
          </Information>
        </GameContainer>
      </Card>
    </GameItemListItem>
  );
};

const games = () => {
  return (
    <GamesList>
      <GameItem
        title="Reddit Viewer"
        description="View hot topics strait from the live feed of Reddit!"
        technologies={['React.js', 'CSS']}
        blogPath="/blogs/redditViewer"
        image={
          <StaticImage
            src="../images/RedditViewer_screenshot.PNG"
            alt="Screenshot of the Reddit Viewer"
          /> 
        }
      />
      <GameItem
        title="Automation"
        description="Automate from raw ore into more advanced items using machines and conveyor belts!"
        technologies={['C#', 'Unity']}
        blogPath="/blogs/automation"
        image={
          <StaticImage
            src="../images/automation.png"
            alt="Screenshot of a conveyor belt and two robotic arms from the game"
          />
        }
      />
      <GameItem
        title="Pop"
        description="Battle your way though waves of enemies using different power ups and weapons!"
        technologies={['C#', 'Unity']}
        blogPath="/blogs/pop"
        image={
          <StaticImage
            src="../images/game_screenshot_dual_stick_shooter.png"
            alt="Screenshot of the dual-stick shooter game"
          />
        }
      />
      <GameItem
        title="2D Platformer"
        description="Jump and dodge past sawblades and rock people to reach the finish line!"
        technologies={['C#', 'Unity']}
        blogPath="/blogs/Game2DRunner"
        image={
          <StaticImage
            src="../images/game_screenshot_2d_platformer.png"
            alt="Screenshot of the 2d platformer game"
          />
        }
      />
    </GamesList>
  );
};


export default games
