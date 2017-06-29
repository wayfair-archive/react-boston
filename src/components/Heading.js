import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../utils';

const Heading = props => {

  const RenderedElement = `h${props.level}`;

  return (
    <RenderedElement className={cx({
      'Heading': true,
      'Heading--centered': props.centered
    })}>
      {props.title}
    </RenderedElement>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  level: PropTypes.oneOf([2, 3, 4]),
  centered: PropTypes.bool
};

Heading.defaultProps = {
  level: 2
};

export default Heading;
