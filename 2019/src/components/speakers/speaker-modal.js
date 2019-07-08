import React from "react"
import { Box, Text } from "../layout-components"
import Modal from "../modal"
import Link from "../link"
import { Twitter, Github } from "../../images/icons/social"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledImage = styled.img`
  display: block;
  height: 400px;
  width: 400px;
  border-bottom-right-radius: 50%;
`

const DescriptionList = Box.withComponent("dl")

const Name = Text.withComponent("dt")

const CompanyName = Text.withComponent("dd")

export default function SpeakerModal({
  onRequestClose,
  isOpen,
  src,
  name,
  company,
  twitter,
  github,
}) {
  return (
    <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
      <Box display="flex">
        <StyledImage src={src} alt={name} />
        <Box
          p={7}
          css={css`
            flex: 1;
          `}
        >
          <DescriptionList>
            <Name fontWeight="bold">{name}</Name>
            <CompanyName color="mediumGrey">{company}</CompanyName>
            <div>
              <dd>
                <Link href={twitter}>
                  <Twitter
                    fill="#f15959"
                    width="28px"
                    height="28px"
                    title="Twitter"
                  />
                </Link>
                <Link href={github}>
                  <Github
                    fill="#f15959"
                    width="28px"
                    height="28px"
                    title="Twitter"
                  />
                </Link>
              </dd>
            </div>
          </DescriptionList>
          description
        </Box>
      </Box>
    </Modal>
  )
}
