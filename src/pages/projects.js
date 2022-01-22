import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const menu = data.site.siteMetadata.menuLinks
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
      <h1>Projects</h1>
      <Seo title="Projects" />
      <h2>No projects yet :(</h2>
      Check back soon.
      <ol style={{ listStyle: `none` }}>
        {/* {console.log(posts[0].frontmatter.title)} */}
        {/* {console.log(posts.filter(function(x) {return !x.frontmatter.title.includes("Draft")}))} */}
        {/* {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })} */}
      </ol>
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
