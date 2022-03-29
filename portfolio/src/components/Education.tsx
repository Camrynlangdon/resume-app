import React from 'react'
import Styled from 'styled-components'
import theme from '../styles/theme'




const Education = Styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: ${theme.foreground};
`

const Title = Styled.h2`
    color: rgb(0, 173, 181);
`

const Information = Styled.p`

`

function education() {
    return (
        <Education>
            <Title>Education</Title>

            <Information>Studied Computer Science at Sierra College</Information>
        </Education>
    )
}

export default education
