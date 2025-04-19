import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Visitantes do Museu',
            version: '1.0.0',
            description: 'API para gerenciar visitantes e visitas do museu',
        },
    },
    apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

export function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
