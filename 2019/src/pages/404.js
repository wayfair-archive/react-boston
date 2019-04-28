import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconLogo from "../images/icon-logo"
import { Box } from "../components/layout-components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Box width="400px" mx="auto" my="11">
      <IconLogo />
    </Box>
  </Layout>
)

export default NotFoundPage
