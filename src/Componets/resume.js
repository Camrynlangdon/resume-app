import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
display: column;
border: solid;
padding: 15px;
`

const Banner = Styled.div`
display: flex;
align-items: center;
`

const Title = Styled.h2`
padding-right: 13px;
color: blue;
`

const Year = Styled.h3`

`

const Paragraph = Styled.p`
width: 400px;
`





function resume() {
    return (
        <div>
            <Container>
                <Banner>
                    <Title>
                        MarketSorce
                    </Title>
                    <Year>
                        (2018 - 2019)
                    </Year>
                </Banner>
                <Paragraph>
                    Working in a high-demand sales and marketing environment across different Sacramento locations. Handling multiple cellular mobile companies to provide the best solution for customers. Maintained customer service, sales, inventory, and self-management, and (POS) system trained.
                </Paragraph>
            </Container>
        </div>
    )
}

export default resume
