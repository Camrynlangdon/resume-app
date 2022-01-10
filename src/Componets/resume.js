import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
display: column;
border: solid;
border-radius: 20px;
padding: 15px;
margin: 50px;
max-width: 400px;
`

const Banner = Styled.div`
display: flex;
align-items: center;
`

const Title = Styled.h2`
padding-right: 13px;
color: rgb(0, 173, 181);

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
                        Target
                    </Title>
                    <Year>
                        (2019 - 2020)
                    </Year>
                </Banner>
                <Paragraph>
                    Handled thousands of outbound deliveries from the backroom and floor inventories for online orders.
                </Paragraph>
            </Container>

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

            <Container>
                <Banner>
                    <Title>
                        Chick-fil-A
                    </Title>
                    <Year>
                        (2014 - 2017)
                    </Year>
                </Banner>
                <Paragraph>
                    Cross-trained for food preparation, cooking, safe handling, and storage. Maintained high standards for customer service during high-volume, fast-paced operations.  Handled currency and credit transactions quickly while maintaining an accurate point of sale (POS).
                </Paragraph>
            </Container>

        </div>
    )
}

export default resume
