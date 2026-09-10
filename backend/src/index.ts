import express from 'express'
import cors from 'cors'
import servicesRoutes from './routes/services'
import branchesRoutes from './routes/branches'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Queiroz Auto Center API rodando' })
})

app.use('/api/services', servicesRoutes)
app.use('/api/branches', branchesRoutes)

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})