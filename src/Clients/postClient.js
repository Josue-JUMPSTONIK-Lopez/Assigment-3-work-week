const contentful = require('contentful-management')

const postClient = contentful.createClient({
  accessToken: '<content_management_api_key>'
})


export default postClient