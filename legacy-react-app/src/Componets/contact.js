import React, { Component } from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MainDiv = Styled.div`
padding: 50px;
`

const Container = Styled.div`
display: flex;
gap: 10px;
align-items: center;
`




const contact = () => {

    return (
        <MainDiv>

            <Container>
                <FontAwesomeIcon icon={faHome} />
                <h3>Sacramento, CA</h3>
            </Container>

            <Container>
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/camryn-langdon-5bab7a127/">LinkedIn</a>
            </Container>

            <Container>
                <FontAwesomeIcon icon={faDiscord} />
                <h3>Azus#0002</h3>
            </Container>
        </MainDiv>
    )

}

export default contact
