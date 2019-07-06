import React, { Component } from "react"
import PropTypes from "prop-types"
import { Box, Text } from "./layout-components"
import { useSpring, animated } from "react-spring"
import SquareButton from "./square-button"
import PlusIcon from "../images/plus-icon"
import styled from "@emotion/styled"

const StyledButtonWrap = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: none;
  &:hover,
  &:focus {
    display: block;
    ~ ${StyledAnimatedBox} ${StyledImage} {
      mix-blend-mode: normal;
    }
  }
`

const StyledWrap = styled.div`
  position: relative;
`

const StyledAnimatedBox = styled(animated.div)`
  overflow: hidden;
  height: 350px;
  width: 350px;
  background: linear-gradient(
    135deg,
    rgba(241, 89, 89, 1) 25%,
    rgba(130, 70, 149, 1) 55%,
    rgba(1, 46, 111, 1) 100%
  );
  border-bottom-right-radius: 50%;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    ~ ${StyledButtonWrap} {
      display: block;
    }
  }
`

const StyledImage = styled.img`
  object-fit: cover;
  display: block;
  mix-blend-mode: luminosity;
  height: 100%;
  width: 100%;
  &:hover,
  &:focus {
    mix-blend-mode: normal;
    cursor: pointer;
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const DescriptionList = Box.withComponent("dl")

const Name = Text.withComponent("dt")

const CompanyName = Text.withComponent("dd")

function SpeakerCard({ src, name, company }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <StyledWrap>
      <StyledAnimatedBox
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <StyledImage src={src} alt={name} />
      </StyledAnimatedBox>
      <DescriptionList mt="4">
        <Name fontWeight="bold">{name}</Name>
        <CompanyName color="mediumGrey">{company}</CompanyName>
      </DescriptionList>
      <StyledButtonWrap>
        <SquareButton>
          <PlusIcon width="44px" height="44px" />
        </SquareButton>
      </StyledButtonWrap>
    </StyledWrap>
  )
}

export default SpeakerCard
