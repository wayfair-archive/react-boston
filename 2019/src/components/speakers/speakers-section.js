import React from "react"
import styled from "@emotion/styled"
import SpeakerCard from "./speaker-card"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  fragment SpeakerData on SpeakersJsonEdge {
    node {
      name
      key
      company
      img {
        src {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default function Speakers() {
  const { allSpeakersJson } = useStaticQuery(
    graphql`
      query {
        allSpeakersJson {
          edges {
            ...SpeakerData
            node {
              github
              twitter
              description
            }
          }
        }
      }
    `
  )

  const { edges } = allSpeakersJson

  const getAlternateRows = index => {
    const numbers = [3, 4, 5]
    return numbers.map(num => {
      let styles
      for (let i = num; i <= edges.length; i += 6) {
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
    for (let i = 1; i <= edges.length; i += 3) {
      if (index % 3 === 1) {
        return `margin-top: -100px;`
      }
    }
  }

  const Grid = styled.ul`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    list-style: none;
  `

  const Column = styled.li`
    width: 100%;
    max-width: 350px;
    @media screen and (min-width: 68em) {
      ${props => getColumnAlignment(props.index)}
      ${props => getAlternateRows(props.index)}
    }
  `

  return (
    <Grid>
      {edges.map(({ node }, index) => (
        <Column key={node.key} index={index}>
          <SpeakerCard index={index} {...node} />
        </Column>
      ))}
    </Grid>
  )
}
