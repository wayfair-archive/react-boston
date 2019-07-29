import React from "react"
import { Text, Container, Box } from "../components/layout-components"
import Link from "../components/link"
import WayfairLogo from "../images/icons/wf-logo"
import { css } from "@emotion/core"
import Button from "../components/button"
import styled from "@emotion/styled"

const LogoCard = styled.div`
  background: #f5f9fa;
  padding: 10px;
  border-radius: 0 65px 0 65px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.15);
`

export default () => (
  <Container title="React Boston 2019 is sponsored and hosted by:">
    <Box
      display="grid"
      gridGap="40px"
      gridTemplateColumns={["1fr", "1fr 1fr"]}
      gridTemplateRows="300px"
    >
      <LogoCard>
        <WayfairLogo
          css={css`
            width: 250px;
            max-width: 100%;
          `}
        />
      </LogoCard>
      <Box pt={4}>
        <Text mb={4} fontSize={4} fontWeight="bold">
          Wayfair
        </Text>
        <Text mb={4}>
          We're the creative builders solving complex business problems through
          the newest and most innovative software in e-commerce.
        </Text>
        <Text mb={4}>
          <Link href="https://tech.wayfair.com/" openInNewTab>
            tech.wayfair.com
          </Link>
        </Text>
        <Text>
          <Link
            href="https://www.wayfair.com/careers/jobs/?teamIds=1"
            openInNewTab
          >
            wayfair.com/careers
          </Link>
        </Text>
      </Box>
    </Box>
    <Box mt="13" mx="auto" width="300px">
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSfnoReme6hkXwSWDB6QGKKrCOu2GEFJbknxxiKV6vjL_dd4HQ/viewform"
        secondary
      >
        Interested in sponsoring?
      </Button>
    </Box>
  </Container>
)
