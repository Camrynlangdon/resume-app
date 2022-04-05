import React from 'react';
import Styled from 'styled-components';

const ListContainer = Styled.ul`
    display: flex;
    padding: 0;
    max-width: 100%;
    flex-wrap: wrap;
    list-style-type: none;
    color: rgba(255,255,255,0.7);
    li :not(:last-child) {
        padding-right: 6px;
        margin-right: 6px;
        border-right: 1px solid grey;
    }
`;
const TechnologyLabel = Styled.li`
    width: fit-content;
`;

const TechnologiesList = ({
  technologies,
}: {
  technologies: Array<string>;
}) => {
  return (
    <ListContainer>
      {technologies.map((label) => (
        <TechnologyLabel key="label">{label}</TechnologyLabel>
      ))}
    </ListContainer>
  );
};

export default TechnologiesList;
