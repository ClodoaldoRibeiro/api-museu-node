# Museu API

Este projeto é uma API para gerenciar visitantes e visitas de um museu. Ele foi desenvolvido utilizando Node.js e Express, com documentação gerada automaticamente pelo Swagger.

## Funcionalidades

- **Gerenciamento de visitantes**:
  - Listar todos os visitantes
  - Obter detalhes de um visitante específico
  - Adicionar um novo visitante
  - Atualizar informações de um visitante
  - Remover um visitante

- **Gerenciamento de visitas**:
  - Listar todas as visitas
  - Obter detalhes de uma visita específica
  - Adicionar uma nova visita
  - Atualizar informações de uma visita
  - Remover uma visita

## Tecnologias Utilizadas

- Node.js
- Express
- Swagger (para documentação da API)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-museu-node.git
   cd api-museu-node
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

4. Acesse a API em: [http://localhost:3000](http://localhost:3000)

5. Acesse a documentação do Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Estrutura do Projeto

```
.gitignore
package.json
server.js
swagger.js
controllers/
  visit.controller.js
  visitor.controller.js
data/
  .gitkeep
  visitors.json
models/
  visit.model.js
  visitor.model.js
repositories/
  visit.repository.js
  visitor.repository.js
routes/
  visit.routes.js
  visitor.routes.js
```

## Endpoints

A documentação completa dos endpoints está disponível no Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.