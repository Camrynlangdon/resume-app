import React from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const MainDiv = Styled.div`
    display: flex;
    margin-bottom: 150px;
    margin-top: 50px;
`

const Image = Styled.img`
    background-color: grey;
    height: 250px;
    width: 300px;
`

const Information = Styled.div`
    display: space-between;
    align-items: center;
    padding: 20px;
`

const Icons = Styled.a`
    padding: 5px;
    color: inherit;
`

const NameHeading = Styled.h1`
    margin-bottom: 7px;
`

const TitleHeading = Styled.h2`
    margin-top: 0;
    font-size: 1rem;
`


const Title = () => {
    return (
        <MainDiv>
            <Information>
                <NameHeading>Camryn Langdon</NameHeading>
                <TitleHeading>Software Engineer</TitleHeading>
                <Icons
                    href='https://www.linkedin.com/in/camryn-langdon-5bab7a127/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Icons>
                <Icons
                    href='https://github.com/Camrynlangdon'>
                    <FontAwesomeIcon icon={faGithub} />
                </Icons>

            </Information>


        </MainDiv>
    )
}

export default Title
