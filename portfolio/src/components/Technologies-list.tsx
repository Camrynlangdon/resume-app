import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    color: rgba(255,255,255,0.7);
    span :not(:last-child) {
        padding-right: 6px;
        margin-right: 6px;
        border-right: 1px solid grey;
    }
`;
const Technologies = Styled.span`
`;

const TechnologiesList = ({
  technologies,
}: {
  technologies: Array<string>;
}) => {
  return (
    <Container>
      {technologies.map((label) => (
        <Technologies key="label">{label}</Technologies>
      ))}
    </Container>
  );
};

export default TechnologiesList;
