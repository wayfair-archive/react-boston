import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primaryAccent};
    text-decoration: none;
  }
`;

const Link = ({ href, openInNewWindow, children, ...rest }) => (
  <StyledLink
    href={href}
    target={openInNewWindow ? '_blank' : null}
    rel={openInNewWindow ? 'noopener noreferrer' : null}
    {...rest}
  >
    {children}
  </StyledLink>
);

Link.propTypes = {
  href: PropTypes.string,
  openInNewWindow: PropTypes.bool,
  children: PropTypes.node
};

export default Link;
