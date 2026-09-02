import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Queiroz Auto Center API rodando' })
})

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})