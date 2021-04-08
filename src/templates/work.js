import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <div className="top">
          <a class="back" href="/">&laquo; Back to My Portfolio</a>
          <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
          <a href={data.datoCmsWork.site} rel="noreferrer" target="_blank" class="site">{data.datoCmsWork.site}</a>
        </div>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        <div className="max">
          <div className="sheet__slider">
            <Slider autoplay adaptiveHeight={true} speed={500} infinite={true} slidesToShow={1} arrows={true} fade={true} dots>
              {data.datoCmsWork.gallery.map(({ fluid }) => (
                <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="sheet__content">
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
            }}
          />
        </div>
        <Img fluid={data.datoCmsWork.coverImage.fluid} />
        <a class="back" href="/">&laquo; Back to My Portfolio</a>
      </div>
    </article>
  </Layout>
)
export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      site
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`