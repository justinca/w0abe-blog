/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {FaTwitter} from 'react-icons/fa';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <p>
            <a href={`https://twitter.com/${social.twitter}`} >
              <FaTwitter/>
            </a>
          <p/>
          <a target="_blank" rel="noreferrer" href={`https://www.qrz.com/db/W0ABE`}>
            Find me on QRZ
          </a>
          <p/>
          <a target="_blank" rel="noreferrer" href={`https://www.wunderground.com/weather/us/co/bellvue/KCOBELLV9`}>
            View my weather station
          </a>
          </p>
        </p>
      )}
    </div>
  )
}

export default Bio
