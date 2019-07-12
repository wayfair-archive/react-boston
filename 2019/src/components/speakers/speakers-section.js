import React from "react"
import styled from "@emotion/styled"
import SpeakerCard from "./speaker-card"
import { SPEAKERS } from "../../api/speakers"
import { useStaticQuery, graphql } from "gatsby"

const Grid = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-gap: 20px;
  list-style: none;
`

const getAlternateRows = index => {
  const numbers = [3, 4, 5]
  return numbers.map(num => {
    let styles
    for (let i = num; i <= SPEAKERS.length; i += 6) {
      if (index === i) {
        styles = `
          div,
          img {
            border-bottom-right-radius: 0;
            border-top-left-radius: 50%;
          }
          dl {
            text-align: right;
          }
          div {
            justify-content: flex-end;
          }
        `
      }
    }
    return styles
  })
}

const getColumnAlignment = index => {
  for (let i = 1; i <= SPEAKERS.length; i += 3) {
    if (index % 3 === 1) {
      return `margin-top: -100px;`
    }
  }
}

const Column = styled.li`
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 68em) {
    ${props => getColumnAlignment(props.index)}
    ${props => getAlternateRows(props.index)}
  }
`

export default function Speakers() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "speakers" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const { edges } = allFile
  const speakerData = SPEAKERS.map(speaker => {
    return {
      ...speaker,
      src: edges.find(({ node }) => {
        return node.name === speaker.key ? node : null
      }),
    }
  })

  return (
    <Grid>
      {speakerData.map((speaker, index) => (
        <Column key={speaker.name} index={index}>
          <SpeakerCard index={index} {...speaker} />
        </Column>
      ))}
    </Grid>
  )
}
