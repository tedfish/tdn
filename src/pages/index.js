import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
const IndexPage = ({ data }) => (
  <Layout>
    <article className="sheet sheet__home">
      <HelmetDatoCms seo={data.home.seoMetaTags} />
      <div className="sheet__inner">
        <div className="hero_container">
          <div className="sheet__hero">
            <Img fluid={data.home.photo.fluid} />
          </div>
          <h1 className="sheet__title">{data.home.title}</h1>
        </div>
        <div className="content_container shadow">
          <p className="sheet__lead">{data.home.subtitle}</p>
          <div className="sheet__introText" dangerouslySetInnerHTML={{ __html: data.home.introText }} />
        </div>
        <div class="logos">
          {data.home.logos.map((item, i) => (
              <div key={i}>
                <Img fluid={item.fluid}/>
              </div>
            ))}
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
      logos {
        url
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      content
      photo {
        fluid(maxWidth: 2000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`