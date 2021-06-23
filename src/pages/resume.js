import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
const Resume = ({ data: { resume } }) => (
  <Layout>
    <article className="sheet sheet__resume">
      <HelmetDatoCms seo={resume.seoMetaTags} />
      <div className="sheet__inner">
      <iframe src="https://haveyoumetted.com/resume.html" width="100%" height="1000" title="My Resume"></iframe>
      </div>
    </article>
  </Layout>
)
export default Resume
export const query = graphql`
  query ResumeQuery {
    resume: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
    }
  }
`