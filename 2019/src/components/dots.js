import React from "react"
import styled from "@emotion/styled"

const Dots = styled.div`
  position: ${props =>
    props.position === "absolute" ? "absolute" : "relative"};
  z-index: ${props => props.zIndex || "auto"};
  top: 0;
  height: 100%;
  left: ${props => props.containerLeftOffset || "auto"};
  right: ${props => props.containerRightOffset || "auto"};
  &::after {
    content: "";
    display: block;
    height: ${props => props.height || "100%"};
    width: 160px;
    top: ${props => props.top || "-50px"};
    left: ${props => props.left || "auto"};
    right: ${props => props.right || "auto"};
    bottom: ${props => props.bottom || "auto"};
    position: absolute;
    background: radial-gradient(red 15%, transparent 16%) 1px 1px / 16px 16px,
      radial-gradient(rgba(255, 255, 255, 0) 15%, transparent 20%) 8px 9px;
  }
`

export default props => <Dots {...props} />
