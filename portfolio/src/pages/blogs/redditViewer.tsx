import React from 'react';
import Styled from 'styled-components';
import Blog from '../../views/Blog'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ImageDiv = Styled.div`
    padding-top: 20px;
`
const Image = Styled.div`
    max-width: 100%;
    padding: 15px;
`
const WebsiteLink = Styled.a`

`

const redditViewer = () => {
    return <Blog title="Reddit App"
        description="View the main feed or individual subReddits!"
        technologies={['React.js', 'CSS', 'Chakra']}
    >

        <WebsiteLink href='https://camryns-reddit-viewer.netlify.app/' target="_blank">Check out the site here!</WebsiteLink>
        
      
       

        <p>
            “Reddit App" is a solo project that I wanted to make to showcase my current skills within React.js, CSS, REST APIs, and more.  This application lets the user access Reddit’s main feed or individual subReddits with different options to sort posts by.  There is also an option to search for a specific sub or choose from a list of provided popular subs.
        </p>
        <h2> 
            Build Structure
        </h2>
        <p>
            My first priority when building this app was reusability. Most things on Reddit such as the main feed, individual subs, posts, or user pages use the same format, so this is all crammed into one React component that has different render options based on each specific case.  This is the same for media components, Reddit supports tons of different ways to share your favorite pieces of media such as images, mp4s, gifs or gifvs, youtube, etc.  Adding support for all of these media types is crucial to ensuring a great user experience, so I have made a component that will accept any media type and send back a useable React component that can be plugged in anywhere on the page.  One last important feature of this app is the comment thread, without comments there is no connection to the original uploader.  The comments component can take an object with comments that also have comments, using recursive methods to extract each comment and vote count, and sends back a component that can be plugged in anywhere on the project.  Below I will provide some examples of the app, if you have any other questions regarding its construction, feel free to message me!
        </p>
        <WebsiteLink href='https://github.com/Camrynlangdon/RedditApp' target="_blank">Check out the repository!</WebsiteLink>
        <ImageDiv>
            <StaticImage src='../../images/RedditApp/reddit_feed.jpg' alt="screenshot of the Reddit viewer"/>
            <Image>
                <StaticImage src="../../images/RedditApp/reddit_comments.jpg" alt="screenshot of the Reddit viewer"/>
            </Image>

            <Image>
                <StaticImage src="../../images/RedditApp/reddit_sort.jpg" alt="screenshot of the files"/>
            </Image>
        </ImageDiv>
    </Blog>
}

export default redditViewer;