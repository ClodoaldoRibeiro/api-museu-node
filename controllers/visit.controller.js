import { VisitRepository } from '../repositories/visit.repository.js'

const repository = new VisitRepository()

export const listVisits = (req, res) => {
  res.json(repository.getAll())
}

export const getVisit = (req, res) => {
  const visit = repository.getById(req.params.id)
  if (visit) {
    res.json(visit)
  } else {
    res.status(404).json({ message: 'Visita não encontrada' })
  }
}

export const addVisit = (req, res) => {
  const { visitorId, date, purpose, notes } = req.body
  if (!visitorId || !date) {
    return res.status(400).json({ message: 'visitorId e date são obrigatórios' })
  }
  const newVisit = repository.create({ visitorId, date, purpose, notes })
  res.status(201).json(newVisit)
}

export const editVisit = (req, res) => {
  const updated = repository.update(req.params.id, req.body)
  if (updated) {
    res.json(updated)
  } else {
    res.status(404).json({ message: 'Visita não encontrada' })
  }
}

export const removeVisit = (req, res) => {
  const deleted = repository.delete(req.params.id)
  if (deleted) {
    res.json({ message: 'Visita removida com sucesso' })
  } else {
    res.status(404).json({ message: 'Visita não encontrada' })
  }
}
