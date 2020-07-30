const { graphqlForSecondaryPages } = require("./create-pages/pages.create")
const { createFilePath } = require(`gatsby-source-filesystem`)

function createIndividualPages(actions, graphql) {
  const { createPage } = actions

  return Promise.all([
    graphqlForSecondaryPages(graphql, createPage, "blog"),
    graphqlForSecondaryPages(graphql, createPage, "theme"),
    graphqlForSecondaryPages(graphql, createPage, "finalist"),
    graphqlForSecondaryPages(graphql, createPage, "faq"),
    graphqlForSecondaryPages(graphql, createPage, "team"),
    graphqlForSecondaryPages(graphql, createPage, "judge"),
    graphqlForSecondaryPages(graphql, createPage, "winners"),
  ])
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
