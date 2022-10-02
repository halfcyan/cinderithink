import * as React from "react"
import type { HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../images/quote.jpg"

export function Quote() {
  return (
    <StaticImage
      src="../images/quote.jpg"
      alt="Quote from @cinderithink twitter account saying 'if someone looked at my twitter likes and replies they would (correctly) assume that im extremely mentally ill and have an obsession with fluffy humanoid drawings and will toledo'"
    />
  )
}
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Sup</h1>
      </div>
      <div>
        <p>
          I don't really have any ideas for this website right now so I guess it's just gonna be this for a while lol
        </p> 
      </div>
      <Quote />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
