import React from 'react';
import { Card, CardSection } from './Card';
import styled from 'styled-components';

const ImgWrap = styled.div`
  position: relative;
  &:before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    transition: 0.45s ease-out;
    background: ${({ theme }) => theme.color.primary};
  }

  img {
    width: 100%;
    filter: saturate(0);
    transition: 0.45s ease-out;
    mix-blend-mode: multiply;
  }
`;

const Wrap = styled.div`
  display: block;
  position: relative;
  transition: 0.45s ease-out;
  &:focus,
  &:hover {
    transform: scale(1.1);
    z-index: 2;
    ${ImgWrap} {
      &:before {
        background: none;
      }
    }
    img {
      filter: none;
      mix-blend-mode: initial;
    }
  }
`;

const LinkWrap = Wrap.withComponent('a');

const HoverCard = ({ href, children, src, alt, isCentered, ...props }) => {
  const Wrapper = href ? LinkWrap : Wrap;
  return (
    <Wrapper href={href} {...props}>
      <Card isCentered={isCentered}>
        <ImgWrap>
          <img src={src} alt={alt} />
        </ImgWrap>
        {children && <CardSection>{children}</CardSection>}
      </Card>
    </Wrapper>
  );
};

export default HoverCard;
