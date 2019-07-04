import React from "react"
import Layout from "../components/Layout"
import "../global-styles/base-reset.css"
import { SectionTitle } from "../components/layout-components"

export default () => (
  <Layout>
    <div>hero / countdown / join us</div>
    <SectionTitle fontSize={6} fontStyle="italic">
      Speakers
    </SectionTitle>
  </Layout>
)
