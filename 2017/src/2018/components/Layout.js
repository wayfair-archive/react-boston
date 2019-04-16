import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2/3;
  position: relative;
  z-index: 2;
`;

export const SectionTitle = styled.h2`
  font-style: italic;
  font-size: 4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.light};
  display: inline-block;
  position: relative;
  margin-bottom: 0.6em;
  &::after {
    content: '';
    height: 3px;
    width: 100px;
    background: ${({ theme }) => theme.color.primary};
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
  }
`;

export const SectionWrap = styled.section`
  padding: 50px 10px;
  position: relative;
  ${({ theme }) =>
    theme.media.md`
      display: grid;
      grid-template-columns: 1fr 675px 1fr;
      &::after {
        content: '';
        display: block;
        height: 60%;
        max-height: 590px;
        width: 180px;
        position: absolute;
        bottom: -10%;
        right: 0;
        background: radial-gradient(red 15%, transparent 16%) 1px 1px,
          radial-gradient(rgba(255, 255, 255, 0) 15%, transparent 20%) 8px 9px;
        background-size: 16px 16px;
        z-index: 1;
      }
  `};

  &:nth-of-type(even) {
    background: ${({ theme }) => theme.color.lightest};
    &::after {
      left: 0;
    }
  }
`;

const Section = ({ children, title, ...rest }) => (
  <SectionWrap {...rest}>
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  </SectionWrap>
);

export default Section;
