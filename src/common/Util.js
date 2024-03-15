const { getCsvFileById } = require('../external-services/toolbox-api')

const filterCsvLines = (filteredLines) => {
  return filteredLines.map(line => {
    const [file, text, number, hex] = line.split(',')
    return { file, text, number, hex }
  })
}
const formatCsvLine = async (fileName) => {
  const { data } = await getCsvFileById(fileName)
  const filteredLines = data.split('\n').filter(info => !info.startsWith('file,'))
  return filterCsvLines(filteredLines)
}

module.exports = {
  formatCsvLine
}
