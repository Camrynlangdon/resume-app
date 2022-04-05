import React from 'react';
import Styled from 'styled-components';
import theme from '../styles/theme';


const Container = Styled.div`
    padding: 20px;
    background-color: ${theme.foreground};
    border-radius: 12px;
    min-width: 180px;
    margin-bottom: 30px;

    
`;

type Props = {
  children: React.ReactChild | Array<React.ReactChild>;
};

const Card = ({ children}: Props) => {
  return <Container >{children}</Container>;
};

export default Card;
