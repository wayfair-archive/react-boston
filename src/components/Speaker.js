import React from 'react';
import PropTypes from 'prop-types';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

const Speaker = props => (
  <article className="Speaker">
    <img className="Speaker-photo" src={props.imageSrc} alt="" />
    <h3 className="Speaker-name">{props.name}</h3>
    <p className="Speaker-company">{props.company}</p>
    <p className="Speaker-description">{props.description}</p>
    <div className="Speaker-social">
      <a href={props.twitter}><TwitterIcon /></a>
      <a href={props.github}><GithubIcon /></a>
    </div>
  </article>
);

Speaker.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string
}

export default Speaker;
