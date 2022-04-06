import React, { Component } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { config, IconProp } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

// Fix huge icon flash: https://github.com/FortAwesome/react-fontawesome/issues/234
config.autoAddCss = false

import theme from '../styles/theme';
import Card from './Card';

const InfoList = Styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
 
`;
const ListItem = Styled.li`
    display: flex;
    align-items: center;
    height: 35px;
    padding-right: auto;
`;
const IconContainer = Styled.div`
    width: 40px;
`;

const ContactItem = ({
  icon,
  children,
}: {
  icon: IconProp;
  children: React.ReactChild;
}) => {
  return (
    <ListItem>
      <IconContainer>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      <div>{children}</div>
    </ListItem>
  );
};

const contact = () => {
  return (
    <Card>
      <InfoList>
        <ContactItem icon={faHome}>Sacramento, CA</ContactItem>
        <ContactItem icon={faLaptopCode}>Computer Science</ContactItem>
        <ContactItem icon={faLinkedin}>
          <a href="https://www.linkedin.com/in/camryn-langdon-5bab7a127/">
            LinkedIn
          </a>
        </ContactItem>
        <ContactItem icon={faDiscord}>Azus#0002</ContactItem>
      </InfoList>
    </Card>
  );
};

export default contact;
