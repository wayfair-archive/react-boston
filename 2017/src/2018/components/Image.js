import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Base Card
const StyledImage = styled.img`
  background: white;
`;

export const Image = ({ src, hasOverlay }) => (
  <StyledImage hasOverlay={hasOverlay} src={src} />
);

Image.PropTypes = {
  src: PropTypes.string,
  hasOverlay: PropTypes.bool
};
