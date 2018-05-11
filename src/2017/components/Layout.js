import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  @media (min-width: 768px) {
    max-width: 1280px;
  }
`;

export const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

const Block = props => (
  <Box py="3rem" className={props.className} {...props}>
    {props.children}
  </Box>
);

export const PageBlock = styled(Block)`
  & + & {
    border-top: 1px solid ${p => p.theme.color.lightest};
  }
`;
