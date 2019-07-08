import React from "react"
import { Box } from "../components/layout-components"
import ImageBanner from "../images/image-banner"

export default () => (
  <Box
    width="1000px"
    height="100%"
  >
    <ImageBanner />
    <Box pt="2px">
        <ImageBanner />
    </Box>
    <Box pt="2px">
      <ImageBanner />
    </Box>
  </Box>
)