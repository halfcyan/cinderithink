import './src/styles/global.css'

import { createFilePath } from 'gatsby-source-filesystem'

// Convert to ES6
export const onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
      const slug = createFilePath({ node, getNode, basePath: 'pages' })
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })
    }
  }