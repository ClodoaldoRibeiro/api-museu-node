import { VisitorRepository } from '../repositories/visitor.repository.js'

const repository = new VisitorRepository()

export const listVisitors = (req, res) => {
  const all = repository.getAll()
  res.json(all)
}

export const getVisitor = (req, res) => {
  const visitor = repository.getById(req.params.id)
  if (visitor) {
    res.json(visitor)
  } else {
    res.status(404).json({ message: 'Visitante não encontrado' })
  }
}

export const addVisitor = (req, res) => {
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Campos obrigatórios: name, email, phone' })
  }
  const newVisitor = repository.create({ name, email, phone })
  res.status(201).json(newVisitor)
}

export const editVisitor = (req, res) => {
  const updated = repository.update(req.params.id, req.body)
  if (updated) {
    res.json(updated)
  } else {
    res.status(404).json({ message: 'Visitante não encontrado' })
  }
}

export const removeVisitor = (req, res) => {
  const deleted = repository.delete(req.params.id)
  if (deleted) {
    res.json({ message: 'Visitante removido com sucesso' })
  } else {
    res.status(404).json({ message: 'Visitante não encontrado' })
  }
}
