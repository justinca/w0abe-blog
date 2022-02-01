import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const menu = data.site.siteMetadata?.menuLinks
  //const posts = data.allMarkdownRemark.nodes
  
  //Logic to hide posts with the word 'Draft' in the title
  const posts = data.allMarkdownRemark.nodes.filter(function(x) {return !x.frontmatter.title.includes("Draft")})

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} menuLinks={menu}>
      <h1>Logbook</h1>
      <Seo title="Getting Started" />
      <iframe class="logbook" align="top" frameborder="0" scrolling="yes" src="https://logbook.qrz.com/lbstat/W0ABE/"></iframe> 
      <Bio />

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
      menuLinks {
        name
        link
      }
    }
  }
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: ASC}
    filter: {fields: {slug: {regex: "/getting-started/"}}}
  ) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
  sitePage {
    id
  }
}
`
