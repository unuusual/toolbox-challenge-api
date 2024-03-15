const axios = require('axios')
const config = require('../../../env.secrets.json')

const getCsvFile = async () => {
  try {
    const endpoint = `${config.toolboxBaseUrl}/v1/secret/files`
    const response = await axios.get(endpoint, {
      headers: { Authorization: `Bearer ${config.token}` }
    })
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

const getCsvFileById = async (idFile) => {
  try {
    const endpoint = `${config.toolboxBaseUrl}/v1/secret/file/${idFile}`
    const response = await axios.get(endpoint, {
      headers: { Authorization: `Bearer ${config.token}` }
    })
    return response
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getCsvFile,
  getCsvFileById
}
