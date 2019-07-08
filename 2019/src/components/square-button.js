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
  box-shadow: 0 4px 6px 1px rgba(34, 25, 36, 0.4);
  transition: 0.3s ease;
  border-radius: 30%;
  border-top-left-radius: 0;

  &:disabled {
    cursor: default;
  }

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`

export default function SquareButton(props) {
  return <StyledButton {...props} />
}
