import React from "react"
import { Box, Text } from "../layout-components"
import Modal from "../modal"
import Link from "../link"
import { Twitter } from "../../images/icons/social"
import styled from "@emotion/styled"

const StyledImage = styled.img`
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
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
}) {
  return (
    <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
      <StyledImage src={src} alt={name} />
      <DescriptionList mt="4">
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
            <Link>Github</Link>
          </dd>
        </div>
      </DescriptionList>
      description
    </Modal>
  )
}
