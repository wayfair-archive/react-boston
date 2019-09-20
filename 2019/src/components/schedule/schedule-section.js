import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, SectionTitle, Text } from "../layout-components"
import { Tabs, Tab, TabPanel } from "../tabs"
import styled from "@emotion/styled"

const SECOND_DAY = "September 22 2019 00:00:00 EST"

const CURRENT_DATE = new Date()

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 28px;
  @media screen and (min-width: 72em) {
    margin-bottom: 64px;
  }
`

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
  padding: 40px 0 0;
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

  const firstDaySchedule = schedule.filter(program =>
    program.day === 1 ? program : null
  )

  const secondDaySchedule = schedule.filter(program =>
    program.day === 2 ? program : null
  )

  const [isSelectedTab, setSelectedTab] = useState(false)

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
      <Tabs initialValue={1}>
        <Wrapper role="tablist">
          <Tab activeTab={1} onTabClick={() => setSelectedTab(isSelectedTab)}>
            Saturday, September 21
          </Tab>
          <Tab activeTab={2} onTabClick={() => setSelectedTab(isSelectedTab)}>
            Sunday, September 22
          </Tab>
        </Wrapper>
        <TabPanel activeTab={1} is="div">
          <Box
            display={[null, null, null, "grid"]}
            gridTemplateColumns="30% 70%"
            gridGap={10}
            px={8}
            as="dl"
            mb={12}
            maxWidth="750px"
          >
            {firstDaySchedule.map(({ time, title, abstract, talk }) => {
              return (
                <Fragment key={time}>
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
                </Fragment>
              )
            })}
          </Box>
        </TabPanel>
        <TabPanel activeTab={2} is="div">
          <Box
            display={[null, null, null, "grid"]}
            gridTemplateColumns="30% 70%"
            gridGap={10}
            px={8}
            as="dl"
            mb={12}
            maxWidth="750px"
          >
            {secondDaySchedule.map(({ time, title, abstract, talk }) => {
              return (
                <Fragment key={time}>
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
                </Fragment>
              )
            })}
          </Box>
        </TabPanel>
      </Tabs>
    </ScheduleWrap>
  )
}
