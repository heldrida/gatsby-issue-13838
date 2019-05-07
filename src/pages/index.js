import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const Index = ({ data }) => (
  <>
    {
      data.wpcms.posts.edges.map(v => <div>
        <p>{`Title of id "${v.node.id}" is "${v.node.title}"`}</p>
      </div>)
    }
  </>
)

Index.propTypes = {
  data: PropTypes.object.isRequired
}

export default Index

export const query = graphql`
  query {
    wpcms {
      posts {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            id
            title
            slug
            date
            excerpt
            author {
              id
              name
            }
            featuredImage {
              id
              sourceUrl
              slug
            }
          }
        }
      }
    }
  }
`
