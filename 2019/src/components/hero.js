import React from "react"
import Logo from "../images/logo"
import ImageBanner from "../images/image-banner"
import Counter from "./counter"
import { Box, Title, Text } from "./layout-components"
import styled from "@emotion/styled"

const Cta = styled(Text)`
  text-transform: uppercase;
`

const Hero = () => (
  <Box width="100%">
    <Box width={["auto", "50%"]} mx={["15%", "", ""]} mt={["50px","", ""]} mb="5">
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
    <Box height={["auto", "100px"]} width="100%">
      <ImageBanner />
    </Box>
    <Box display="flex" mt={["-50px", "-25px"]} flexDirection={["column", "", "row"]} alignItems={["center", "", ""]}>
      <Box
        bg="white"
        maxWidth="550px"
        textAlign="center"
        mr={[0, 9]}
        px="10"
        mb={["32px", ""]}
        position="relative"
      >
        <Text p="3" flex="1" borderRadius="3px 0 0 3px" fontSize="0">
          September 21 - 22, 2019
        </Text>
        <Text pt="3" mb="5" fontWeight="semibold" fontSize="2">
          New England's annual two-day React.js conference
        </Text>
        <Cta p="3" bg="grey" flex="1" borderRadius="0 3px 3px 0" fontSize="0">
          Tickets coming soon!
        </Cta>
      </Box>
      <Counter />
    </Box>
  </Box>
)

export default Hero
