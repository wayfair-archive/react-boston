/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SpeakersJson: {
      key: {
        type: `String!`,
        resolve: (source, args, context, info) => {
          return source.name.toLowerCase().replace(/\s/g, "")
        },
      },
    },
  })
}
