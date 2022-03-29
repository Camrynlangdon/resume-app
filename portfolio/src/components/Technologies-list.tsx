import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div``;
const Technologies = Styled.span`
    padding-right: 6px;
    margin-right: 6px;
    border-right: 1px solid grey;
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
