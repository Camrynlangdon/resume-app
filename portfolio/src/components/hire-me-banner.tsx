import React from 'react';
import Styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import theme from '../styles/theme'

const Banner = Styled.div`
  position: fixed;
  min-height: 60px;
  background-color: ${theme.foreground};
  width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  
  border-bottom: 1px solid grey;

  flex-wrap: wrap;
 
  text-align: center;
  padding: 7px;
`

const BannerText = Styled.span`
    padding: 7px;
`

const LinkedInBtn = Styled.span`
    margin-left: 12px;

    @media(max-width: 864px){
        padding-top: 7px;
    }
`


const HireMeBanner = () => {

    return (
        <Banner>
            <BannerText>
                I am looking for a Junior Frontend developer position in the Sacramento region or remote PST
            </BannerText>
            <LinkedInBtn>
                <a href="https://www.linkedin.com/in/camryn-langdon-5bab7a127/"><FontAwesomeIcon icon={faLinkedin} /> Contact me on LinkedIn</a>
            </LinkedInBtn>
        </Banner>
    )
}

export default HireMeBanner;