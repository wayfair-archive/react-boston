import React from "react"
import { Box } from "./layout-components"

const Card = ({ children }) => (
  <Box
    bg="primaryDark"
    borderRadius="5px"
    color="white"
    alignItems="center"
    justifyContent="center"
    display="flex"
    fontSize={["4", "6", null, "8"]}
    fontStyle="italic"
    px="3"
    py="5"
    boxShadow="0 3px 6px rgba(34, 25, 36, .2)"
    fontFamily="monospace"
  >
    {children}
  </Box>
)

export default Card
