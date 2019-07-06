import React from "react"
import Logo from "../images/logo"
import ImageBanner from "../images/image-banner"
import Counter from "./Counter"
import { Box, Title, Text } from "./layout-components"
import styled from "@emotion/styled"
import Button from "./button"

const Hero = () => (
  <Box width="100%">
    <Box
      width={["auto", "50%"]}
      mx={["10%", "", ""]}
      mt={["50px", "", ""]}
      mb="5"
    >
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
    <Box
      display="flex"
      mt={["", "-25px"]}
      flexDirection={["column", "", "row"]}
      alignItems={["center", "", "flex-start"]}
    >
      <Box
        bg="white"
        maxWidth="550px"
        textAlign="center"
        mr={[0, 9]}
        px="10"
        mb={["32px", ""]}
        position="relative"
      >
        <Text p="3" flex="1" borderRadius="3px 0 0 3px" fontSize="2">
          September 21 - 22, 2019
        </Text>
        <Text pt="3" mb="7" fontWeight="semibold" fontSize="3">
          New England's annual two-day React.js conference
        </Text>
        <Box mb="7" zIndex="0" position="relative">
          <Button
            as="a"
            href="https://www.eventbrite.com/e/react-boston-2019-tickets-61701810777"
          >
            Buy Tickets
          </Button>
        </Box>
        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdx4L2_iKZ7VEsWJHJmz0XpDGfYJzNHG4KB2Bhnpraov20fjw/viewform"
          secondary
        >
          Call For Speakers!
        </Button>
      </Box>
      <Counter />
    </Box>
  </Box>
)

export default Hero
