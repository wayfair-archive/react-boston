import React, { useState } from "react"
import { Container, Text } from "../components/layout-components"
import { Tabs, Tab, TabPanel } from "../components/tabs"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const SECOND_DAY = "September 22 2019 00:00:00 EST"

const CURRENT_DATE = new Date()

export const query = graphql`
  fragment ScheduleData on ScheduleJsonEdge {
    node {
      speaker
      time
      title
      abstract
      day
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`

const ListItem = styled.li`
  list-style-type: none;
  border-radius: 30px;
  border-bottom-right-radius: 0;
  padding: 50px 10px;
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  @media screen and (min-width: 60em) {
    display: grid;
    grid-template-columns: 200px 200px 1fr;
    align-items: center;
    justify-items: center;
  }
`

const ImageWrap = styled.div`
  display: none;
  background: linear-gradient(
    135deg,
    rgba(241, 89, 89, 1) 25%,
    rgba(130, 70, 149, 1) 55%,
    rgba(1, 46, 111, 1) 100%
  );
  border-radius: 30px;
  overflow: hidden;
  @media screen and (min-width: 60em) {
    display: block;
  }
`
const Image = styled(Img)`
  width: 150px;
  height: 150px;
  mix-blend-mode: luminosity;
`

const Title = styled.h2`
  position: relative;
  font-size: ${({ theme }) => `${theme.fontSizes[4]}px`};
  text-align: center;
  @media screen and (min-width: 60em) {
    text-align: left;
  }
`

const TextDecoration = styled.span`
  background-image: linear-gradient(120deg, #f15959 0%, #d63333 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  padding: 0.5em;
  @media screen and (min-width: 60em) {
    background: 0;
  }
`

const ScheduleItem = styled.div`
  grid-column: 2 / span 3;
  align-self: start;
  justify-self: start;
  padding: 0 25px;
  @media screen and (min-width: 60em) {
    grid-column: 3;
  }
`

const Talk = ({ time, title, abstract, talk }) => {
  const showImage = talk && talk.node.img.src !== null

  const formattedAbstract = abstract
    .split("\n")
    .map(item => <Text mt={4}>{item}</Text>)

  return (
    <ListItem key={time}>
      <Text textAlign={["center", null, null, "left"]} fontSize="2">
        <TextDecoration>{time}</TextDecoration>
      </Text>
      {showImage && (
        <ImageWrap>
          <Image fluid={talk.node.img.src.childImageSharp.fluid} />
        </ImageWrap>
      )}
      <ScheduleItem>
        <Title>{title}</Title>
        {talk && (
          <Text fontSize="2" my="3">
            {talk.node.name} - {talk.node.company}
          </Text>
        )}
        {abstract && <div>{formattedAbstract}</div>}
      </ScheduleItem>
    </ListItem>
  )
}

export default function Schedule() {
  const { allScheduleJson, allSpeakersJson } = useStaticQuery(
    graphql`
      query {
        allScheduleJson {
          edges {
            ...ScheduleData
          }
        }
        allSpeakersJson {
          edges {
            ...SpeakerData
          }
        }
      }
    `
  )

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

  const initialTab = CURRENT_DATE >= SECOND_DAY ? 2 : 1

  const [isSelectedTab, setSelectedTab] = useState(false)
  return (
    <Container title="Schedule">
      <Tabs initialValue={initialTab}>
        <Wrapper role="tablist">
          <Tab activeTab={1} onTabClick={() => setSelectedTab(isSelectedTab)}>
            Saturday, September 21
          </Tab>
          <Tab activeTab={2} onTabClick={() => setSelectedTab(isSelectedTab)}>
            Sunday, September 22
          </Tab>
        </Wrapper>
        <TabPanel activeTab={1} is="ul">
          {firstDaySchedule.map(data => (
            <Talk
              key={`${data.speaker.day}${data.time}${data.day}`}
              {...data}
            />
          ))}
        </TabPanel>
        <TabPanel activeTab={2} is="ul">
          {secondDaySchedule.map(data => (
            <Talk
              key={`${data.speaker.day}${data.time}${data.day}`}
              {...data}
            />
          ))}
        </TabPanel>
      </Tabs>
    </Container>
  )
}
