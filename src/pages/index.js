import React from 'react'
import { graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
import {Img} from 'react-image'
const IndexPage = ({ data }) => (
  <Layout>
    <article className="sheet sheet__home">
      <HelmetDatoCms seo={data.home.seoMetaTags} />
      <div className="sheet__inner">
        <div className="hero_container">
          <Img src={data.home.photo.url} alt="A big hole in the ground"/>
          <h1 className="sheet__title">{data.home.title}</h1>
        </div>
        <div className="content_container shadow">
          <p className="sheet__lead">{data.home.subtitle}</p>
          <div className="sheet__introText" dangerouslySetInnerHTML={{ __html: data.home.introText }} />
        </div>
        <h2>
          Technologies I Use
        </h2>
        <Masonry className="logos">
          {data.home.logos.map((item, i) => (
              <div className="item shadow" key={i}>
                <Img src={item.url} alt="TTTT"/>
              </div>
            ))}
        </Masonry>
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
      }
      content
      photo {
        url
      }
    }
  }
`