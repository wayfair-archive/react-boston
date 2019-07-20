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

const DescriptionListWrap = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 40px;
  margin: 40px 0;
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

const Title = styled(Text)`
  @media screen and (min-width: 60em) {
    white-space: nowrap;
  }
`

export default function ScheduleSection() {
  const { allScheduleJson, allSpeakersJson } = useStaticQuery(graphql`
    query {
      allScheduleJson {
        edges {
          node {
            time
            speaker
            title
            abstract
            day
          }
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
      <SectionTitle fontSize={6} fontStyle="italic" p="12">
        Schedule
      </SectionTitle>
      <dl>
        {schedule.map(({ time, title, abstract, talk }) => {
          return (
            <DescriptionListWrap key={time}>
              <DescriptionTerm>{time}</DescriptionTerm>
              <DescriptionDefinition>
                <Title lineHeight="50px" fontSize="5">
                  {title}
                </Title>
                {talk && (
                  <p>
                    {talk.node.name} - {talk.node.company}
                  </p>
                )}
              </DescriptionDefinition>
            </DescriptionListWrap>
          )
        })}
      </dl>
      <Box p="12">
        <Button to="/schedule">Full Schedule</Button>
      </Box>
    </ScheduleWrap>
  )
}
