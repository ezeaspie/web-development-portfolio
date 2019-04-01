import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../images/form.png';

const Thanks = () => (
  <Layout>
    <SEO title="Success!" />
    <div className="">
      <div className="form-success content-container-default">
        <img className="form-submitted" alt="form" src={Form}></img>
        <div className="form-submitted-message">
          <h1>Your message has been sent! Thanks, I'll do my best to respond as soon as possible!</h1>
          <Link className="redirect-home" to="/"><button>Click here to return to the homepage.</button></Link>
        </div>
      </div>
    </div>
    

  </Layout>
)

export default Thanks
