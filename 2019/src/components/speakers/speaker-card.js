import React, { useState, useCallback } from "react"
import { Box, Text } from "../layout-components"
import { useSpring, animated } from "react-spring"
import Modal from "./speaker-modal"
import styled from "@emotion/styled"

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
  }
`

const StyledImage = styled.img`
  object-fit: cover;
  display: block;
  mix-blend-mode: luminosity;
  height: 100%;
  width: 100%;
  border-bottom-right-radius: 50%;
  &:hover,
  &:focus {
    mix-blend-mode: normal;
    cursor: pointer;
  }
`

const DescriptionList = Box.withComponent("dl")

const Name = Text.withComponent("dt")

const CompanyName = Text.withComponent("dd")

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]

// From https://codesandbox.io/embed/rj998k4vmm
const trans = (x, y, s) => {
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion)").matches
  ) {
    // early exit if user enables Reduce Motion in System Preferences to disable animation
    // currently supported in the latest versions of Chrome, Safari, Firefox, Edge
    return
  }
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
}

const useModal = initial => {
  const [isOpen, setIsOpen] = useState(initial)

  return [isOpen, useCallback(() => setIsOpen(status => !status))]
}

export default function SpeakerCard({ src, name, company, twitter, github }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const [isOpen, setIsOpen] = useModal(false)
  return (
    <>
      <StyledAnimatedBox
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <StyledImage src={src} alt={name} onClick={() => setIsOpen(true)} />
      </StyledAnimatedBox>
      <DescriptionList mt="4">
        <Name fontWeight="bold">{name}</Name>
        <CompanyName color="mediumGrey">{company}</CompanyName>
      </DescriptionList>

      {isOpen && (
        <Modal
          onRequestClose={setIsOpen}
          isOpen={isOpen}
          name={name}
          src={src}
          company={company}
          twitter={twitter}
          github={github}
        />
      )}
    </>
  )
}
