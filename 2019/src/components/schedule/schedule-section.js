import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, SectionTitle, Text } from "../layout-components"
import Button from "../button"
import styled from "@emotion/styled"

const SECOND_DAY = "September 22 2019 00:00:00 EST"

const CURRENT_DATE = new Date()

const ScheduleWrap = styled.section`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  background-image: ${({ theme }) => `repeating-radial-gradient(
    ellipse closest-corner at 20% -10%,
    ${theme.colors.primaryDark},
    ${theme.colors.primaryDark} 20px,
    #012a66 20px,
    #012a66 50px
  )`};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 60em) {
    border-top-right-radius: 150px;
    border-bottom-left-radius: 150px;
  }
`

const DescriptionTerm = styled.dt`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: 50px;
  padding: 20px 0;
  @media screen and (min-width: 72em) {
    justify-self: end;
    padding: 0;
  }
`

const DescriptionDefinition = styled.dd`
  max-width: 600px;
  @media screen and (min-width: 72em) {
    justify-self: start;
    text-align: left;
  }
  @media screen and (min-width: 80em) {
    max-width: 100%;
    white-space: nowrap;
  }
`

const TextDecoration = styled.span`
  background-image: linear-gradient(120deg, #f15959 0%, #d63333 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  padding: 0.5em;
  @media screen and (min-width: 72em) {
    background: 0;
  }
`

export default function ScheduleSection() {
  const { allScheduleJson, allSpeakersJson } = useStaticQuery(graphql`
    query {
      allScheduleJson {
        edges {
          ...ScheduleData
        }
      }
      allSpeakersJson {
        edges {
          node {
            key
            name
            company
          }
        }
      }
    }
  `)

  const { edges: scheduleData } = allScheduleJson
  const { edges: speakerData } = allSpeakersJson

  const schedule = scheduleData.map(({ node }) => {
    return {
      ...node,
      talk: speakerData.find(({ node: data }) =>
        data.key === node.speaker ? data : ""
      ),
    }
  })

  const scheduleToDisplay = () => {
    const dayToFilter = CURRENT_DATE >= SECOND_DAY ? 2 : 1
    return schedule.filter(program => program.day === dayToFilter)
  }

  return (
    <ScheduleWrap>
      <SectionTitle
        fontSize={6}
        fontStyle="italic"
        pt={12}
        pb={[8, null, null, 12]}
      >
        Schedule
      </SectionTitle>
      <Box
        as="dl"
        display={[null, null, null, "grid"]}
        gridTemplateColumns="30% 70%"
        gridGap={10}
        px={8}
      >
        {scheduleToDisplay().map(({ time, title, abstract, talk }) => {
          return (
            <React.Fragment key={time}>
              <DescriptionTerm>
                <TextDecoration>{time}</TextDecoration>
              </DescriptionTerm>
              <DescriptionDefinition>
                <Text lineHeight="50px" fontSize={[4, null, null, 5]}>
                  {title}
                </Text>
                {talk && (
                  <p>
                    {talk.node.name} - {talk.node.company}
                  </p>
                )}
              </DescriptionDefinition>
            </React.Fragment>
          )
        })}
      </Box>
      <Box p="12">
        <Button to="/schedule">Full Schedule</Button>
      </Box>
    </ScheduleWrap>
  )
}
