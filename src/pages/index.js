import React from "react"
import { graphql } from "gatsby"
import HomePage from "../components/homePage"
import SEO from "../components/seo"
import ComponentBox from "../components/ComponentBox"
import Button from '@material-ui/core/Button'
import styles from '../styles/styles.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <HomePage location={location} title={siteTitle}>
      <SEO title="Hackathon" keywords={[
            `challenges`,
            `hackathons`,
            `full-stack`,
            `javascript`,
            `covid-19`,
          ]}/>
           <main>
        
        <div style={{ paddingTop:0, marginTop:0, textAlign:"center"}}> 
        <ComponentBox 
          subInfo="Check Now"
          buttonLink="/theme" 
            headline = "Welcome to Code Camp Arena 🎉"
            info="Themes for Hackathon Code Camp 1.0 has been released"
          />
          <ComponentBox 
          subInfo="Making Pull Request Guide"
          buttonLink="/makingRegistration" 
            info="Now Teams are Requested to Fork The Repository and be ready with your Pull Requests. To see how to create Pull Request Visit here."
          />
          <ComponentBox 
            subInfo="ISSUE SECTION FOR CODE CAMP"
            buttonLink="https://github.com/ISTESRMNCR/CODE-CAMP-2020/issues" 
            info="The Teams will Send the Pull Request on 19th July, 2020. from 8 AM to 10 PM. and between that timezone the maintainer will merge your Pull request after reviewing it. For Any Futher Query Visit "
          />
           <Button className="expand-2" href="https://github.com/ISTESRMNCR/CODE-CAMP-2020" target="_blank" link color="primary" variant="contained" size="large" >
          💻 FORK THE REPOSITORY NOW
        </Button>
         
         </div>
        
         <ComponentBox 
            headline = "👋 About Us"
            info="Code Camp is a Virtual Hackathon for programmers all over the world. The Teams would compete among themselves for providing the best solution for the listed themes. This Hackathon is being organized by ISTE Students' Chapter, SRM NCR. The Hackathon will be conducted on GITHUB and teams participating will have to send the Registration PULL REQUEST to hackathon git Repository. Teams are provided with themes on which they have to build their Projects and Submit it later, for Evaluation."
          />
          <ComponentBox 
           info="Select the theme from Themes section and discuss with your teammates. After theme selection from 19th July, 2020. send the Pull request on our GitHub repository. The link to the Github repository is given in the Registration Button. To know how to make a Pull request Follow these Guidelines."
           headline="❓ Registration Guide"
           subInfo="Procedure for Pull request"
           buttonLink="/makingRegistration" 
           />         
          <ComponentBox 
          info="Read Our Instructions Manual to better understand the Rules | See Complete TimeLine | Important Dates | Code_Of_Conduct | And How to register for the hackathon, kindly visit this page."
           headline="👨‍🏫 Instructions"
           subInfo="Instruction Manual"
           buttonLink="/blog" 
           />
          <ComponentBox  
          info="If you stuck in anywhere feel free to visit our FAQs Section. Here, some of your common queries are answered. For any further Query feel free to raise an issue in our GitHub Repository. You will find the link to the Issues section in here."
          headline="💡 FAQs" 
          subInfo="Frequently Asked Questions"
          buttonLink="/faqs" 
           />
          <ComponentBox  
          info="Ideas are responsible for the progression and prosperity of humans – without them we would still be living in prehistoric times. No idea is too small, and all sorts of ideas have potential to change the world as we know it for the better. Visit the Themes Here."
          headline="🎉 Themes" 
          subInfo="Themes"
          buttonLink="/theme" 
           />
          <ComponentBox 
          info="Teams are what makes these Hackathons fun and Meaningful. Hackathons give us an opportunity to work in teams, Collaborate with each other and Contribute to the Society. You can see the details of all the enthusiastic Teams participating in the Hackathon, Here."
           headline="👨‍💻 Teams Registered" 
           subInfo="Teams"
           buttonLink="/teams" 
           />
          {/* <ComponentBox 
          info="No event can be Successful without Sponsors. Their assistance is of great importance. You can see here the Companies who lend us a helping hand in setting up the Code Camp 1.0"
           headline="🧡 Our Sponsors" 
           subInfo="Sponsors"
           buttonLink="/sponsors" 
           /> */}
          <ComponentBox 
          info="A competition is worthless without a leaderboard as it encroaches a sense of competition among the teams. Also great results are achieved with good competitors. Leaderboard is not possible without judges.
            We have the finest judges who have great experience in the industry. You can see our panel of judges here."
           headline="👨‍⚖️ Our Judges"
           subInfo="Judges" 
           buttonLink="/judge" 
           />
             <div style={{ paddingTop:20, marginTop:0,textAlign:"center" }}> 
    
             <Button className="expand-2" href="mailto:teamistesrmncr@gmail.com" target="_blank" link color="primary" variant="contained" size="large" >
          🤝 Partner With Us
        </Button>
         </div>
          </main>
    </HomePage>
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

























