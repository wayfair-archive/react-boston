import React from "react"
import Logo from "../images/logo"
import ImageBanner from "../images/image-banner"
import Counter from "./counter"
import { Box, Title, Text } from "./layout-components"
import styled from "@emotion/styled"

const Wrap = styled(Box)`
  text-transform: uppercase;
`

const Hero = () => (
  <Box width="100%">
    <Box width="50%" mb="5">
      <Logo />
      <Title
        position="absolute"
        top="auto"
        left="-10000px"
        width="1px"
        height="1px"
        overflow="hidden"
        textStyle={{
          transform: "translateZ(0)",
        }}
      >
        React Boston
      </Title>
    </Box>
    <Box height="100px" width="100%">
      <ImageBanner />
    </Box>
    <Box
      display="grid"
      gridTemplateColumns={["1fr", "1fr 1fr"]}
      gridTemplateRows={["auto 1fr", "1fr"]}
      mt="-25px"
      gridGap="32px"
    >
      <Box bg="white" maxWidth="550px" textAlign="center">
        <Text pt="3" mb="3" fontWeight="semibold" fontSize="2">
          New England's annual two-day React.js conference
        </Text>
        <Wrap display="flex">
          <Text
            bg="grey"
            p="3"
            flex="1"
            borderRadius="3px 0 0 3px"
            fontSize="0"
          >
            September 21 - 22, 2019
          </Text>
          <Text
            p="3"
            color="white"
            bg="secondary"
            flex="1"
            borderRadius="0 3px 3px 0"
            fontSize="0"
          >
            Tickets coming soon!
          </Text>
        </Wrap>
      </Box>
      <Counter />
    </Box>
  </Box>
)

export default Hero
