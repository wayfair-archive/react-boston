import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const base = css`
  background: ${({ alternate, theme }) =>
    alternate ? theme.color.white : theme.color.primary};
  color: ${({ alternate, theme }) =>
    alternate ? theme.color.primary : theme.color.white};
  line-height: 1;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  outline: 0;
  font-size: 1.125rem;
  white-space: nowrap;
  user-select: none;
  padding: 1em 1.5em;
  border: 2px solid transparent;
  border-radius: 2px;
  transition: 0.25s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 100%;
  display: block;
  @media (min-width: 768px) {
    display: inline-block;
    vertical-align: middle;
    width: auto;
  }
  &:hover,
  &:focus {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    background: ${({ alternate, theme }) =>
      alternate ? theme.color.white : theme.color.primaryAccent};
  }
  margin: 0.25em;
`;

const StyledButton = styled.button`
  ${base};
  appearance: none;
`;

const StyledLink = styled.a`
  ${base};
  text-decoration: none;
`;

const Button = ({
  href,
  openInNewWindow,
  alternate,
  children,
  onClick,
  type
}) => {
  // If there is an href, use <a>. Otherwise, <button>
  const RenderedElement = href ? StyledLink : StyledButton;

  const getProps = () => {
    if (href) {
      return {
        href,
        target: openInNewWindow ? '_blank' : null,
        rel: openInNewWindow ? 'noopener noreferrer' : null
      };
    } else {
      return {
        type
      };
    }
  };

  return (
    <RenderedElement
      onClick={onClick}
      {...getProps(href)}
      alternate={alternate}
    >
      {children}
    </RenderedElement>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  alternate: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  href: null,
  type: 'button'
};

export default Button;
