import React from 'react'
import Styled from 'styled-components'




const Education = Styled.div`
margin: 20px;
padding: 13px;
border: solid;
border-radius: 13px;
`

const Title = Styled.h2`
color: rgb(0, 173, 181);
`

const Information = Styled.p`

`

function education() {
    return (
        <div>
            <Education>
                <Title>Education</Title>

                <Information>Studied Computer Science at Sierra College</Information>
            </Education>
        </div>
    )
}

export default education
