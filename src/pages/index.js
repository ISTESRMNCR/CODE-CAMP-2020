import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ComponentBox from "../components/ComponentBox"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={[
            `challenges`,
            `hackathons`,
            `full-stack`,
            `javascript`,
            `covid-19`,
          ]}/>
          <main style={{ margin:0 }}>
        <div style={{ padding: 50, paddingTop:0, marginTop:0 }}> 
         <Bio />
         </div>
          <ComponentBox 
            headline = "About 👋"
            info="Technology has the power to change the way see the world. Team ISTE, the Government funded society of SRM IST NCR campus, brings to you a Virtual Open Source Hackathon, Code-Camp. It is a place to turn your crazy ideas into reality, ideas that would help the society and bring a positive change in it. 
              The Hackathon will be organised on github.com which is a perfect place for developers to share ideas and projects. One can easily get registered as a team and participate in the hackathon. We have a variety of themes for you to select and develop a project on it.
                "
                subInfo="Our Official Website"
                buttonLink="https://www.istesrmncr.com"
          />
          <ComponentBox 
          info="Hey!👋Read Our Blogs for better understand about the Rules | See TimeLines and Important Date regarding the Hackathon Code Camp 1.0. We are sure that all facts for Code Camp will be found there with all the links.."
           headline="Blogs ✍"
           subInfo="Blogs"
           buttonLink="/blog" 
           />
          <ComponentBox  
          info="Something Seems terrible ? Are you stuck ?... We have Answered your common queries as Questions open a space in your mind that allow better answers to breathe."
          headline="FAQs  ❓ " 
          subInfo="Frequently Asked Questions"
          buttonLink="/faqs" 
           />
          <ComponentBox  
          info="Ideas are responsible for the progression and prosperity of humans – without them we would still be living in prehistoric times. No idea is too small, and all sorts of ideas have potential to change the world as we know it for the better. Visit the Themes Here."
          headline="Themes  👀 " 
          subInfo="Themes"
          buttonLink="/theme" 
           />
          <ComponentBox 
          info="Teams are what makes these hackathons fun and meaningfull. Hackathons give us an opportunity to work in team, collaborate with each other and contribute to the society. You can see the details of all the enthusiastic teams participating in the event Here."
           headline="Teams  👩‍💻👨‍💻  " 
           subInfo="Teams"
           buttonLink="/teams" 
           />
          <ComponentBox 
          info="No event can be successful without sponsors. Their assistance is of great importance. You can see here the companies who lend us a helping hand in setting up the Code-Camp 1.0"
           headline="Sponsors 💰" 
           subInfo="Sponsors"
           buttonLink="/sponsors" 
           />
          <ComponentBox 
          info="A competition is worthless without a leaderboard as it encroaches a sense of competition among the teams. Also great results are achieved with good competitors. Leaderboard is not possible without judges.
            We have the finest judges who have great experience in the industry. You can see our panel of judges here."
           headline="Judges 👩‍⚖️"
           subInfo="Judges" 
           buttonLink="/judge" 
           />
          </main>
    </Layout>
  )
}



export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }

        }
      }
    }
  }
`
