// Project.js
import './project.scss'
import React from 'react'
// import { Link } from 'react-router-dom'

// Project.js

const Project = ({
  name,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
}) => (
  <div className="project">
    <h2>{name}</h2>
    <img src={image} alt={name} className="project-image" />
    {/* <p>{description}</p> */}
    <p>
      <strong>Technologies:</strong> {technologies}
    </p>
    <div className="links">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository link
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Live Demo Link
        </a>
      )}
    </div>
  </div>
)

export default Project
