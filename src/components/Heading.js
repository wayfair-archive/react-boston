import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingWrap = styled.h2`
  margin: 0;
  line-height: 1.1;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.color.darkest};
  font-size: ${({ level }) => (level === 2 ? '2.5rem' : '1.5rem')};
  margin-bottom: 0.75em;
  padding-bottom: ${({ centered }) => (centered ? '.5em' : null)};
  position: relative;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  ${({ centered, theme }) =>
    centered &&
    `
    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 125px;
      background: ${theme.color.primary};
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  `};
`;

const Heading = props => {
  const RenderedElement = HeadingWrap.withComponent(`h${props.level}`);

  return <RenderedElement {...props}>{props.title}</RenderedElement>;
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
