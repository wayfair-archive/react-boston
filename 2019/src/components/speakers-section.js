import React from "react"
import styled from "@emotion/styled"
import SpeakerCard from "./speaker-card"
import { SPEAKERS } from "../api/speakers"

const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const getAlternateRows = index => {
  const numbers = [3, 4, 5]
  return numbers.map(num => {
    let styles
    for (let i = num; i <= 100; i += 6) {
      if (index === i) {
        styles = `
          div {
            border-bottom-right-radius: 0;
            border-top-left-radius: 50%;
          }
          dl {
            text-align: right;
          }
        `
      }
    }
    return styles
  })
}

const getColumnAlignment = index => {
  for (let i = 1; i <= 100; i += 3) {
    if (index % 3 === 1) {
      return `margin-top: -100px;`
    }
  }
}

const Column = styled.ul`
  max-width: 350px;
  list-style: none;
  @media screen and (min-width: 68em) {
    ${props => getColumnAlignment(props.index)}
    ${props => getAlternateRows(props.index)}
  }
`

export default function Speakers() {
  return (
    <Grid>
      {SPEAKERS.map((speaker, index) => (
        <Column key={speaker.name} index={index}>
          <SpeakerCard index={index} {...speaker} />
        </Column>
      ))}
    </Grid>
  )
}
