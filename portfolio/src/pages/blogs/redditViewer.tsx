import React from 'react';
import Styled from 'styled-components';
import Blog from '../../views/Blog'
import { StaticImage } from "gatsby-plugin-image"


const ImageDiv = Styled.div`
    
`
const Image = Styled.div`
    max-width: 100%;
    padding: 15px;
`
const WebsiteLink = Styled.a`

`

const redditViewer = () => {
    return <Blog title="Reddit Viewer"
        description="View hot topics strait from the live feed of Reddit!"
        technologies={['React.js', 'CSS']}
    >

        <WebsiteLink href='https://camryns-reddit-viewer.netlify.app/' target="_blank">Check out the site here!</WebsiteLink>
        
        <h2>Class Structure:</h2>

        <p>
        “Reddit Viewer” is an application I made to practice using APIs and reusable components.  This application takes a value (r/”subreddit name”) and requests the information using the official Reddit API.  The return is a long JSON file that is parsed out into useful information for the user.
        The class structure in the project is very simple, I have a “Reddit Browser” for the Reddit browser with reusable components such as “dropdown”, “Button”, and “Header”.  All CSS is done using the library “Styled Components”.  
        </p>
        
        <ImageDiv>
            <Image
            style={{
                maxWidth:"200px"
            }}
            >
                <StaticImage src="../../images/RedditViewer_screenshot_mobile.jpg" alt="screenshot of the Reddit viewer"/>
            </Image>

            <Image>
                <StaticImage src="../../images/RedditViewerCodeScreenShot.png" alt="screenshot of the files"/>
            </Image>
        </ImageDiv>
    </Blog>
}

export default redditViewer;