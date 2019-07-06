import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  appearance: none;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  height: 60px;
  width: 60px;
  cursor: pointer;
  position: relative;
  text-align: center;
  outline: 0;
  white-space: nowrap;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  vertical-align: middle;
  &:disabled {
    cursor: default;
  }
  &,
  &::after {
    transition: 0.3s ease;
    border-bottom-left-radius: 30%;
    border-top-right-radius: 30%;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 2%;
    right: 2%;
    bottom: 0;
    z-index: -1;
    box-shadow: 0 16px 6px 1px rgba(34, 25, 36, 0.2);
    transform: translateY(-10px);
    opacity: 0;
  }
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    &::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default function SquareButton(props) {
  return <StyledButton {...props} />
}
