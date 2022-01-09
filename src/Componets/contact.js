import React, { Component } from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'



const Container = Styled.div`
display: flex;
gap: 10px;
align-items: center;
`




export class contact extends Component {
    render() {
        return (
            <div>

                <Container>
                    <FontAwesomeIcon icon={faHome} />
                    <h3>  Sacramento, CA</h3>
                </Container>

                <Container>
                    <FontAwesomeIcon icon={faDiscord} />
                    <h3>  Azus#0002</h3>
                </Container>
            </div>
        )
    }
}

export default contact
