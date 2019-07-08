import React from "react"
import styled from "@emotion/styled"
import {
  alignItems,
  borderRadius,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  fontSize,
  fontStyle,
  fontWeight,
  gridColumn,
  gridGap,
  gridRow,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  justifyContent,
  justifyItems,
  left,
  lineHeight,
  maxHeight,
  maxWidth,
  overflow,
  position,
  right,
  space,
  textAlign,
  textStyle,
  top,
  width,
  zIndex,
} from "styled-system"

export const Text = styled.p`
  ${borderRadius}
  ${bottom}
  ${color}
  ${flex}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${height}
  ${left}
  ${lineHeight}
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${textAlign}
  ${textStyle}
  ${top}
  ${width}
`

Text.propTypes = {
  ...borderRadius.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...fontSize.propTypes,
  ...fontStyle.propTypes,
  ...fontWeight.propTypes,
  ...height.propTypes,
  ...left.propTypes,
  ...lineHeight.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...textStyle.propTypes,
  ...top.propTypes,
  ...width.propTypes,
}

export const Box = styled(Text.withComponent("div"))`
  ${alignItems}
  ${boxShadow}
  ${display}
  ${flexDirection}
  ${gridColumn}
  ${gridGap}
  ${gridRow}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${justifyContent}
  ${justifyItems}
  ${maxHeight}
  ${maxWidth}
  ${zIndex}
`

Box.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...display.propTypes,
  ...flexDirection.propTypes,
  ...gridColumn.propTypes,
  ...gridGap.propTypes,
  ...gridRow.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...zIndex.propTypes,
}

export const Title = Text.withComponent("h1")

export const SectionTitle = Text.withComponent("h2")

export const InlineText = Text.withComponent("span")

export const Container = props => (
  <Box
    maxWidth={["94vw", "90vw", "", "1200px"]}
    p={[1, 3, 11]}
    mx="auto"
    {...props}
  />
)
