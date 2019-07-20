import React, { Suspense } from "react"
import "../global-styles/base-reset.css"
import { Box, SectionTitle, Text } from "../components/layout-components"
import Intro from "../components/intro"
import Dots from "../components/dots"
import styled from "@emotion/styled"

const Speakers = React.lazy(() =>
  import("../components/speakers/speakers-section")
)
const ScheduleSection = React.lazy(() =>
  import("../components/schedule/schedule-section")
)

const StyledSectionTitle = styled(SectionTitle)`
  width: 350px;
`

export default () => (
  <>
    <Box maxWidth={["94vw", "90vw", "", "1200px"]} m="auto">
      <Box py={["50px", null, "100px"]} px={["28px", null, null, null, "0"]}>
        <Intro />
      </Box>
      <Box pt={["50px", null, "100px"]} px={["28px", null, null, null, "0"]}>
        <Box
          display="grid"
          justifyItems={[null, null, "center"]}
          gridGap="20px"
          gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
          gridTemplateRows="100px"
        >
          <StyledSectionTitle fontSize={6} fontStyle="italic">
            Speakers
          </StyledSectionTitle>
          <Box display={["none", null, null, "block"]}>
            <Dots height="210px" left="60px" />
          </Box>
        </Box>
        <Suspense fallback={<div>loading</div>}>
          <Speakers />
        </Suspense>
        <Box display="flex" justifyContent="center" pt="11" pb="12">
          <Text textAlign="center" fontSize={3}>
            More speakers to be announced soon...
          </Text>
        </Box>
      </Box>
    </Box>
    <Box pb={["0", null, null, "100px"]} position="relative">
      <Box display={["none", null, null, "block"]}>
        <Dots position="absolute" left="40px" top="-80px" height="400px" />
      </Box>
      <Suspense fallback={<div>loading</div>}>
        <ScheduleSection />
      </Suspense>
      <Box display={["none", null, null, "block"]}>
        <Dots
          position="absolute"
          containerRightOffset="0"
          right="40px"
          top="auto"
          bottom="20px"
          height="400px"
        />
      </Box>
    </Box>
  </>
)
