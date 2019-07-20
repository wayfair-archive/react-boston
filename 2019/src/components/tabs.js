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
  background-color: transparent;
  border: 0;
  flex: 1;
  cursor: pointer;
  &.is-active,
  &:hover,
  &:focus {
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);
  }
  &:focus {
    outline: 1px dashed ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
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
