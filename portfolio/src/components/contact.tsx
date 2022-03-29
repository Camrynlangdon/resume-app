import React, { Component } from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptopCode, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import theme from '../styles/theme'

const MainDiv = Styled.div`
    padding: 20px;
    background-color: ${theme.foreground};
    border-radius: 12px;
    max-width: 300px;
`



const InfoList = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
 
`
const ListItem = Styled.li`
    position: relative; 
    display: flex;
    align-items: center;
    min-height: 35px;
    padding-bottom: 7px;


    svg {
        width: 20%;
       
    }



`

const LinkedInLink = Styled.a`
    position: absolute;
    margin: -50px;
    width: calc(100% + 100px);
    color: black !important;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    background-color: gold;
    height: 60px;
    margin-top: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: auto;
        margin: 7px;
    }
`




const contact = () => {

    return (
        <MainDiv>
            <InfoList>
                <ListItem>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Sacramento, CA</span>
                </ListItem>
                <ListItem>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    Computer Science
                </ListItem>
                <ListItem>
                    <FontAwesomeIcon icon={faGlasses} />
                    Sierra College
                </ListItem>
                <ListItem>
                    <p>I am looking for an internship or Junior frontend position in the Sacramento region or remote</p>
                </ListItem>
                <ListItem>
                    <LinkedInLink href="https://www.linkedin.com/in/camryn-langdon-5bab7a127/"><FontAwesomeIcon icon={faLinkedin} />Contact me on LinkedIn</LinkedInLink>
                </ListItem>
            </InfoList>
        </MainDiv>
    )

}

export default contact
