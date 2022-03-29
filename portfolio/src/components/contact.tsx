import React, { Component } from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import theme from '../styles/theme'

const MainDiv = Styled.div`
    padding: 20px;
    background-color: ${theme.foreground};
    border-radius: 12px;
`



const InfoList = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
 
`
const ListItem = Styled.li`
    display: flex;
    align-items: center;
    height: 35px;

    svg {
        width: 20%;
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
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/camryn-langdon-5bab7a127/">LinkedIn</a>
                </ListItem>
                <ListItem>
                    <FontAwesomeIcon icon={faDiscord} />
                    <h3>Azus#0002</h3>
                </ListItem>
            </InfoList>
        </MainDiv>
    )

}

export default contact
