import React from 'react';
import Layout from '../components/layout'
import Styled from 'styled-components'
import NavLink from '../components/NavLink'

type BlogProps = {
    title: string,
    description: string,
    technologies: Array<string>,
    children: React.ReactChild | Array<React.ReactChild>
}

const BlogContainer = Styled.div`
    margin-top: 60px;
`
const BlogBody = Styled.div`
    margin-top: 50px;
`;
const BlogTitle = Styled.h1`
    margin-top: 30px;
`
const BlogDescription = Styled.p``
const Technologies = Styled.span`
    padding-right: 6px;
    margin-right: 6px;
    border-right: 1px solid grey;
`

const Blog = ({ title, description, technologies = [], children }: BlogProps) => {

    return (
        <Layout>
            <BlogContainer>
                <NavLink href="/" label="back to home" />
                <BlogTitle>{title}</BlogTitle>
                <BlogDescription>{description}</BlogDescription>
                {technologies.map(label => <Technologies key="label">{label}</Technologies>)}
                <BlogBody>
                    {children}
                </BlogBody>
            </BlogContainer>
        </Layout>
    );

}

export default Blog;