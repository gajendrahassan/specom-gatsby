const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
  query ProjectDetails {
    allServicesJson {
        edges {
            node {
                slug
               
              }
        }
      }
  }
  `)

  data.allServicesJson.edges.forEach(edge => {
    actions.createPage({
      path: '/services/'+ edge.node.slug,
      component: path.resolve('./src/templates/services.js'),
      context: { slug: edge.node.slug }
    })
  })

}