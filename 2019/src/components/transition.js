import React from "react"
import posed, { PoseGroup } from "react-pose"

const Container = posed.div({
  enter: {
    opacity: 1,
    delay: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 400 },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.95,
    transformOrigin: "top center",
  },
})

export default function Transition({ children, location }) {
  return (
    <PoseGroup>
      <Container key={location.pathname}>{children}</Container>
    </PoseGroup>
  )
}
