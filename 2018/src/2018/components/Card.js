import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Base Card
const StyledCard = styled.div`
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : '')};
  > img {
    width: 100%;
  }
`;

export const Card = ({ children, isCentered }) => (
  <StyledCard isCentered={isCentered}>{children}</StyledCard>
);

Card.propTypes = {
  children: PropTypes.node,
  isCentered: PropTypes.bool
};

// Inner Card Section
export const CardSection = styled.div`
  padding: ${({ isLarge }) => (isLarge ? '2rem' : '1rem')};
`;

// Card Title
const StyledCardTitle = styled.h3`
  font-size: ${({ isLarge }) => (isLarge ? '2.4rem' : '1.8rem')};
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkest};
`;

export const CardTitle = ({ children, isLarge }) => (
  <StyledCardTitle isLarge={isLarge}>{children}</StyledCardTitle>
);
