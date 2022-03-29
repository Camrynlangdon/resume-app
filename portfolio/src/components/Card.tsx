import React from 'react';
import Styled from 'styled-components';
import theme from '../styles/theme.ts';
import { space, SpaceProps } from 'styled-system';

const Container = Styled.div<SpaceProps>`
    padding: 20px;
    background-color: ${theme.foreground};
    border-radius: 12px;
    min-width: 180px;
    margin-bottom: 30px;

    ${space}
`;

type Props = {
  children: React.ReactChild | Array<React.ReactChild>;
  mb: SpaceProps.mb;
};

const Card = ({ children, mb }: {}) => {
  return <Container {...{ mb }}>{children}</Container>;
};

export default Card;
