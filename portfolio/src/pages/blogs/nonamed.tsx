import React from "react";
import Styled from "styled-components";
import Blog from "../../views/Blog";
import { StaticImage } from "gatsby-plugin-image";

const ImageDiv = Styled.div`
    display: column:
    align-items: center;
    justify-content: center;
`;
const Image = Styled.div`
    max-width: 100%;
    padding: 15px;
`;

const ProjectReferences = Styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`;

const ReferenceNames = Styled.a`
    margin-top: 3px;
    margin-bottom: 5px;
    text-indent: 20px;
`;

const noNamed = () => {
  return (
    <Blog
      title="[unnamed]"
      description="Add modules and customize your very own site using provided tools"
      technologies={["React.js", "TypeScript", "CSS"]}
    >
      <p>
        “[unnamed]” is a project that I am currently working on that consists of
        a team of three people including myself and two senior developers from
        Confluent with a focus on dynamically rendering different types of
        content that can be added by the user.
      </p>

      <ProjectReferences>
        <span>Frontend:</span>
        <ReferenceNames
          href="https://www.linkedin.com/in/camryn-langdon-5bab7a127/"
          target="_blank"
        >
          Myself
        </ReferenceNames>
        <ReferenceNames
          href="https://www.linkedin.com/in/gage-langdon/"
          target="_blank"
        >
          Gage Langdon
        </ReferenceNames>

        <span>Backend:</span>
        <ReferenceNames
          href="https://www.linkedin.com/in/maxton-delaney/"
          target="_blank"
        >
          Maxton Delaney
        </ReferenceNames>
      </ProjectReferences>

      <ImageDiv>
        <Image
          style={{
            maxWidth: "200px",
          }}
        >
          <StaticImage
            src="../../images/moduleSiteOverview.png"
            alt="screenshot of the Reddit viewer"
          />
        </Image>

        <Image>
          <StaticImage
            src="../../images/moduleSiteEdit.png"
            alt="screenshot of the files"
          />
        </Image>
      </ImageDiv>
    </Blog>
  );
};

export default noNamed;
