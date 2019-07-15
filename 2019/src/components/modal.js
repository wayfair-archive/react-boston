import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { createPortal } from "react-dom"
import Dismiss from "../images/icons/dismiss"
import SquareButton from "./square-button"
import { Box } from "./layout-components"
import styled from "@emotion/styled"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 10;
  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 94vw;
  @media screen and (min-width: 40em) {
    max-width: 90vw;
  }
  @media screen and (min-width: 80em) {
    max-width: 1200px;
  }
`

const Veil = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
`

const Portal = ({ children }) => {
  const node = document.createElement("div")

  useEffect(() => {
    document.body.appendChild(node)
  }, [])

  useEffect(() => {
    return () => document.body.removeChild(node)
  })

  return createPortal(children, node)
}

// Reusable Modal Component
const Modal = ({ children, onRequestClose, isOpen }) => {
  return (
    <Portal isOpen={isOpen}>
      {isOpen && (
        <ModalWrapper role="dialog">
          <ModalCard>
            <Box position="absolute" top="10px" left="10px">
              <SquareButton role="button" onClick={onRequestClose}>
                <Dismiss width="44px" height="44px" title="Close" />
              </SquareButton>
            </Box>
            {children}
          </ModalCard>
          <Veil onClick={onRequestClose} />
        </ModalWrapper>
      )}
    </Portal>
  )
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node,
  onRequestClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}
