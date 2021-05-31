/* THIS FILE MERGES ALL FILES IN THE PARENT DIRECTORY */

import camelCase from 'lodash/camelCase'
// Storing in variable a context with all files in this folder
// ending with `.js`.
const requireApi = require.context('.', false, /\.js$/)
const apis = {}
requireApi.keys().forEach((fileName) => {
  if (fileName === './index.js') return
  // filter fullstops and extension
  // and return a camel-case name for the file
  const apiName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
  // create a dynamic object with all modules
  apis[apiName] = {
    ...requireApi(fileName),
  }
})


export default apis
