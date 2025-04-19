import express from 'express'
import visitorRoutes from './routes/visitor.routes.js'
import visitRoutes from './routes/visit.routes.js'
import { setupSwagger } from './swagger.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api/visitors', visitorRoutes)
app.use('/api/visits', visitRoutes)

setupSwagger(app)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
  console.log(`Swagger: http://localhost:${PORT}/api-docs`)
})
