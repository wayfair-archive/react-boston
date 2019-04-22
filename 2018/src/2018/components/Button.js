import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const base = css`
  background: ${({ alternate, theme }) =>
    alternate ? theme.color.secondary : theme.color.primary};
  color: ${({ alternate, theme }) =>
    alternate ? theme.color.white : theme.color.white};
  line-height: 1;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  outline: 0;
  font-size: ${({ small }) => (small ? '1.5rem' : '2.4rem')};
  white-space: nowrap;
  user-select: none;
  padding: 1em 1.5em;
  border: 2px solid transparent;
  border-radius: 0;
  transition: 0.25s ease-out;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    cursor: default;
  }
  &:hover,
  &:focus {
    background: ${({ alternate, theme }) =>
      alternate ? theme.color.secondaryAccent : theme.color.primaryAccent};
  }
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
  type,
  small,
  disabled
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
        type,
        disabled
      };
    }
  };

  return (
    <RenderedElement
      onClick={onClick}
      {...getProps(href)}
      alternate={alternate}
      small={small}
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
