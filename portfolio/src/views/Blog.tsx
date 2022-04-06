import '../styles/global.css';
import React from 'react';
import Layout from '../components/layout';
import Styled from 'styled-components';
import NavLink from '../components/NavLink';
import TechnologiesList from '../components/Technologies-list';

type BlogProps = {
  title: string;
  description: string;
  technologies: Array<string>;
  websiteLink?: keyof JSX.IntrinsicElements;
  children: React.ReactChild | Array<React.ReactChild>;
};

const BlogContainer = Styled.div`
    margin-right: 40px;
    margin-left: 40px;
    margin-top: 60px;
    margin-bottom: 100px;
`;
const BlogBody = Styled.div`
    margin-top: 50px;
`;
const BlogTitle = Styled.h1`
    margin-top: 30px;
`;




const BlogDescription = Styled.p``;

const Blog = ({
  title,
  description,
  technologies = [],
  children,
}: BlogProps) => {
  return (
    <Layout>
      <BlogContainer>
        <NavLink href="/" label="back to home" />
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{description}</BlogDescription>
        <TechnologiesList technologies={technologies} />
        <BlogBody>{children}</BlogBody>
      </BlogContainer>
    </Layout>
  );
};

export default Blog;
