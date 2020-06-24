import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ComponentBox from "../components/ComponentBox"
import SassyButtons from '../components/SassyButtons'

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
          <main>
        <div style={{ padding: 60, paddingTop:0, marginTop:0,}}> 
         <Bio />
         </div>
        <div style={{ paddingTop:0, marginTop:0, alignItems:"center"}}> 
         <SassyButtons 
            head="💻 REGISTER NOW"
            link="https://github.com/ISTESRMNCR/CODE-CAMP-2020"
         />
         </div>
         
          <ComponentBox 
            headline = "About Us 👋"
            info="Technology has the power to change the way to see the world. Indian Society For Technical Education, Student's Chapter, SRM NCR, the government recognized society of SRM Institute of Science and Technology, Delhi NCR Campus, brings to you a Virtual Open Source Hackathon, Code Camp 1.0 . It is a place to turn your crazy ideas into reality, ideas that would help the society and bring a positive change in it. 
              The Hackathon will be organized on GitHub, which is a perfect place for developers to share Ideas and Projects. One can easily get registered as a team and participate in the Hackathon. We have a variety of Themes for you to select and Develop a project on it.
                "
                subInfo="Our Official Website"
                buttonLink="https://www.istesrmncr.com"
          />
          <ComponentBox 
          info="Hey! 👋 Read Our Instruction Manual to better understand the Rules | See TimeLines and Important Date regarding the Hackathon Code Camp 1.0, We are sure that all facts for Code Camp will be found there with all the links.."
           headline="Instructions 📏"
           subInfo="Instruction Manual"
           buttonLink="/blog" 
           />
          <ComponentBox  
          info="If you stuck in anywhere feel free to visit our FAQs Section. Here, some of your common queries are answered. For any further Query feel free to raise an issue in our GitHub Repository. You will find the link to the Issues section in here."
          headline="FAQs  ❓ " 
          subInfo="Frequently Asked Questions"
          buttonLink="/faqs" 
           />
          <ComponentBox  
          info="Ideas are responsible for the progression and prosperity of humans – without them we would still be living in prehistoric times. No idea is too small, and all sorts of ideas have potential to change the world as we know it for the better. Visit the Themes Here."
          headline="Themes 👀 " 
          subInfo="Themes"
          buttonLink="/theme" 
           />
          <ComponentBox 
          info="Teams are what makes these Hackathons fun and Meaningful. Hackathons give us an opportunity to work in teams, Collaborate with each other and Contribute to the Society. You can see the details of all the enthusiastic Teams participating in the Hackathon, Here."
           headline="Teams Registered 👩🏻‍🤝‍👩🏻" 
           subInfo="Teams"
           buttonLink="/teams" 
           />
          <ComponentBox 
          info="No event can be Successful without Sponsors. Their assistance is of great importance. You can see here the Companies who lend us a helping hand in setting up the Code Camp 1.0"
           headline="Our Sponsors " 
           subInfo="Sponsors"
           buttonLink="/sponsors" 
           />
          <ComponentBox 
          info="A competition is worthless without a leaderboard as it encroaches a sense of competition among the teams. Also great results are achieved with good competitors. Leaderboard is not possible without judges.
            We have the finest judges who have great experience in the industry. You can see our panel of judges here."
           headline="Our Judges 👩‍⚖️"
           subInfo="Judges" 
           buttonLink="/judge" 
           />
             <div style={{ paddingTop:0, marginTop:0, alignItems:"center"}}> 
           <SassyButtons 
             head="🤝 Partner With Us"
             link="mailto:teamistesrmncr@gmail.com"
           />
         </div>
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
