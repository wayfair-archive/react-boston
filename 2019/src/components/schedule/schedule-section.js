import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, SectionTitle, Text } from "../layout-components"
import Button from "../button"
import styled from "@emotion/styled"

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
  justify-self: end;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: 50px;
`

const DescriptionDefinition = styled.dd`
  justify-self: start;
  text-align: left;
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

  return (
    <ScheduleWrap>
      <SectionTitle fontSize={6} fontStyle="italic" p={12}>
        Schedule
      </SectionTitle>
      <Box as="dl" display="grid" gridTemplateColumns="30% 70%" gridGap={10}>
        {schedule.map(({ time, title, abstract, talk }) => {
          return (
            <React.Fragment key={time}>
              <DescriptionTerm>{time}</DescriptionTerm>
              <DescriptionDefinition>
                <Text lineHeight="50px" fontSize="5">
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
