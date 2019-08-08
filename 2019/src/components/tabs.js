import React, { createContext, useState, useContext } from "react"
import styled from "@emotion/styled"

const TabContext = createContext()

function Tabs(props) {
  const { initialValue, children } = props

  const [activeTab, changeTab] = useState(initialValue)
  const tabProviderValue = { activeTab, changeTab }

  return (
    <TabContext.Provider value={tabProviderValue}>
      {children}
    </TabContext.Provider>
  )
}

const BaseTab = styled.button`
  padding: ${({ theme }) => `${theme.space[7]}px`};
  background-color: ${({ theme }) => theme.colors.grey};
  transition: 0.2s ease-out;
  border: 0;
  flex: 1;
  cursor: pointer;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  font-weight: bold;
  &.is-active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    outline: 0;
  }
  &:hover,
  &:focus {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);
  }
`

const Tab = ({ activeTab, children, onTabClick }) => {
  const tabContext = useContext(TabContext)
  const handleTabClick = e => {
    tabContext.changeTab(activeTab)
    onTabClick(e)
  }
  return (
    <BaseTab
      type="button"
      role="tab"
      aria-selected={tabContext.activeTab === activeTab}
      onClick={handleTabClick}
      id={`tab-${activeTab}`}
      aria-controls={`content-panel-${activeTab}`}
      className={tabContext.activeTab === activeTab ? "is-active" : ""}
    >
      {children}
    </BaseTab>
  )
}

function TabPanel(props) {
  const { activeTab, children, is } = props
  const tabContext = useContext(TabContext)
  const Element = is
  return (
    tabContext.activeTab === activeTab && (
      <Element
        role="tabpanel"
        id={`content-panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {children}
      </Element>
    )
  )
}

Tabs.Tab = Tab
Tabs.Panel = TabPanel

export { Tabs, Tab, TabPanel }
