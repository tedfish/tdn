import React from 'react'
import {  graphql } from 'gatsby'
// import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
const IndexPage = ({ data: { home } }) => (
  <Layout>
    <article className="sheet sheet__about">
      <HelmetDatoCms seo={home.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{home.title}</h1>
        <p className="sheet__lead">{home.subtitle}</p>
        <p>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQP-iP4Ttr1b8yzfwj9cA-XDXFGoXpapcT7_qUsbehupRisxGwBmmv4vWxT73MhB9cXNXZHEm-j86Y6/pub" rel="noreferrer" target="_blank">My résumé</a>  
        </p>
        {/* <div className="sheet__gallery">
          <Img fluid={home.photo.fluid} />
        </div> */}
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
      content
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`