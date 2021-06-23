import React from 'react'
import {  graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
const IndexPage = ({ data: { home } }) => (
  <Layout>
    <article className="sheet sheet__home">
      <HelmetDatoCms seo={home.seoMetaTags} />
      <div className="sheet__inner">
        <div className="hero_container">
          <div className="sheet__hero">
            <Img fluid={home.photo.fluid} />
          </div>
          <h1 className="sheet__title">{home.title}</h1>
        </div>
        <div className="content_container shadow">
          <p className="sheet__lead">{home.subtitle}</p>
          <div className="sheet__introText" dangerouslySetInnerHTML={{ __html: home.introText }} />
        </div>
      </div>
    </article>
  </Layout>
)
export default IndexPage
export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      introText
      content
      photo {
        fluid(maxWidth: 2000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`