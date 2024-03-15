const { Router } = require('express')
const { getCsvFile } = require('../../external-services/toolbox-api')
const { formatCsvLine } = require('../../common/Util')
const router = Router()

/**
 * @openapi
 * /files/list:
 *  get:
 *     tags:
 *       - ListCsvName
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                files:
 *                  type: array
 *                  items:
 *                    type: string
  *       500:
 *         description: Error de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/list', async (req, res) => {
  try {
    const { files } = await getCsvFile()
    return res.status(200).send({ files })
  } catch (error) {
    return res.status(500).send({ error })
  }
})

/**
 * @openapi
 * /files/data:
 *  get:
 *     tags:
 *       - ListCsvData
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                file:
 *                  type: string
 *                lines:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      file:
 *                        type: string
 *                      text:
 *                        type: string
 *                      number:
 *                        type: string   # Opcional, ya que parece que el número es opcional en tu ejemplo
 *                      hex:
 *                        type: string
 *       500:
 *         description: Error de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
/**
 * @openapi
 * /files/data?fileName={fileName}:
 *   get:
 *     tags:
 *       - ListCsvData
 *     parameters:
 *       - in: query
 *         name: fileName
 *         schema:
 *           type: string
 *         description: Nombre del archivo CSV
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: string
 *                 lines:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       file:
 *                         type: string
 *                       text:
 *                         type: string
 *                       number:
 *                         type: string
 *                       hex:
 *                         type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: File not found.
 *       500:
 *         description: Error de servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.get('/data', async (req, res) => {
  const { fileName } = req.query
  try {
    const { files } = await getCsvFile()
    const requestData = []

    if (fileName) {
      try {
        const formattedLines = await formatCsvLine(fileName)
        requestData.push({ fileName, lines: formattedLines })
      } catch (error) {
        return res.status(404).send({ msg: 'File not found.' })
      }
      return res.status(200).send(requestData)
    } else {
      for (const file of files) {
        try {
          const formattedLines = await formatCsvLine(file)
          requestData.push({ file, lines: formattedLines })
        } catch (error) {
          console.error(error.message)
        }
      }
    }
    return res.status(200).send(requestData)
  } catch (error) {
    return res.status(500).send({ error })
  }
})

module.exports = router
