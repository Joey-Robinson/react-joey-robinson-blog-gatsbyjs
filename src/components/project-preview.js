import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ title, description, slug, imageData }) => (
  <div className="project-preview">
    <Link to={`portfolio/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`portfolio/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`portfolio/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
);

export default ProjectPreview;
