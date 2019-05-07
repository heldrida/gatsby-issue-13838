import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const Post = (props) => {
  const post = props.data.wpcms.postBy
  return (
    <>
      <h1>{post.title}</h1>
      <img style={{ width: '500px', height: 'auto' }} src={post.featuredImage.sourceUrl} alt={post.featuredImage.altText} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div>{`Post by ${post.author.firstName} ${post.author.lastName} on ${post.date}`}</div>
    </>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired
}

export default Post

export const query = graphql`
  query($slug: String) {
    wpcms {
      postBy(slug: $slug) {
        id
        content
        postId
        title
        slug
        date
        content
        author {
          id
          firstName
          lastName
        }
        featuredImage {
          id
          sourceUrl
          slug
        }
      }
    }
  }
`
