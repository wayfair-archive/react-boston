import React from "react"
import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system"
import propTypes from "@styled-system/prop-types"

export const Text = styled("p", { shouldForwardProp })(
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography
)

Text.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
}

export const Box = styled(Text.withComponent("div"), { shouldForwardProp })(
  background,
  grid,
  shadow
)

Box.propTypes = {
  ...propTypes.background,
  ...propTypes.grid,
  ...propTypes.shadow,
}

export const Title = Text.withComponent("h1")

export const SectionTitle = Text.withComponent("h2")

export const ParagraphTitle = Text.withComponent("h3")

export const InlineText = Text.withComponent("span")

export const Section = Box.withComponent("section")

export const Container = props => (
  <Box
    maxWidth={["94vw", "90vw", "", "1200px"]}
    px={[4]}
    py={11}
    mx="auto"
    {...props}
  >
    {props.title && (
      <Title fontStyle="italic" mb={5}>
        {props.title}
      </Title>
    )}
    {props.children}
  </Box>
)
