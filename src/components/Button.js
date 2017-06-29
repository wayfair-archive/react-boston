import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../utils';

const Button = props => {
  const buttonClasses = {
    'className':
    cx({
      'Button': true,
      'Button--primary': !props.alternate,
      'Button--alternate': props.alternate
    })
  };

  // If there is an href, use <a>. Otherwise, <button>
  const RenderedElement = props.href ? 'a' : 'button';

  return (
    <RenderedElement
      {...buttonClasses}
      onClick={props.onClick}
      href={props.href}
      target={props.href && props.openInNewWindow ? '_blank' : null}
      rel={props.href && props.openInNewWindow ? 'noopener noreferrer' : null}
    >
      {props.children}
    </RenderedElement>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  alternate: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string
};

Button.defaultProps = {
  alternate: false,
  href: null
};

export default Button;
