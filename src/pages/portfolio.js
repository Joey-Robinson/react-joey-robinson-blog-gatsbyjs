import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'
import SEO from '../components/seo'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            url
            technology
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <SEO title="Portfolio" description="Portfolio for Joey Robinson" keywords={[`Joey Robinson`, `Portfolio`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Portfolio`]} />
      <section className="portfolio">
        {projects.map(({ node: project }) => {
          const title = project.title;
          const description = project.description;
          const slug = project.slug;
          const imageData = project.image.childImageSharp.fluid;
          const url = project.url
          const technology = project.technology
          
          return (
            <ProjectPreview
              title={title}
              description={description}
              slug={slug}
              imageData={imageData}
              url={url}
              technology={technology}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export default Portfolio;
