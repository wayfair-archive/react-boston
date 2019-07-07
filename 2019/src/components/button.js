import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  appearance: none;
  text-decoration: none;
  background: ${props => ({ theme }) =>
    props.secondary ? theme.colors.white : theme.colors.secondary};
  border: ${props => ({ theme }) =>
    props.secondary
      ? `2px solid ${theme.colors.secondary}`
      : "2px solid transparent"};
  && {
    // increased specificity to override link in header color
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  line-height: 1;
  cursor: pointer;
  position: relative;
  text-align: center;
  outline: 0;
  white-space: nowrap;
  user-select: none;
  padding: 0.7em 1.5em;
  display: block;
  font-size: 1.5rem;
  vertical-align: middle;
  &:disabled {
    cursor: default;
  }
  &,
  &::after {
    border-radius: 50vw;
    transition: 0.3s ease;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 6%;
    right: 6%;
    bottom: 0;
    z-index: -1;
    box-shadow: 0 16px 6px -8px rgba(34, 25, 36, 0.2);
    transform: translateY(-10px);
    opacity: 0;
  }
  &:focus,
  &:hover {
    background: ${props => ({ theme }) =>
      props.secondary ? theme.colors.grey : theme.colors.secondaryDark};
    &::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const StyledLink = StyledButton.withComponent("a")

const StyledGatsbyLink = StyledButton.withComponent(Link)

export default function Button(props) {
  let RenderedElement
  if (props.href) {
    RenderedElement = StyledLink
  } else if (props.to) {
    RenderedElement = StyledGatsbyLink
  } else {
    RenderedElement = StyledButton
  }
  return <RenderedElement {...props} />
}