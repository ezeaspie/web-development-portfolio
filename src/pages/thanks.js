import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => (
  <Layout>
    <SEO title="Success!" />
    <h1>Thanks for the message, I'll do my best to respond as soon as possible!</h1>
    <p>You will be redirected to the homepage in a few seconds.</p>
    <Link to="/">Or click here go back now.</Link>
  </Layout>
)

export default Thanks
