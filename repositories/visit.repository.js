import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import { Visit } from '../models/visit.model.js'

const FILE = './data/visits.json'

function readData() {
  if (!fs.existsSync(FILE)) return []
  return JSON.parse(fs.readFileSync(FILE))
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
}

export class VisitRepository {
  getAll() {
    return readData()
  }

  getById(id) {
    return readData().find(v => v.id === id)
  }

  getByVisitorId(visitorId) {
    return readData().filter(v => v.visitorId === visitorId)
  }

  create({ visitorId, date, purpose, notes }) {
    const visits = readData()
    const visit = new Visit({ id: uuidv4(), visitorId, date, purpose, notes })
    visits.push(visit)
    writeData(visits)
    return visit
  }

  update(id, data) {
    const visits = readData()
    const index = visits.findIndex(v => v.id === id)
    if (index !== -1) {
      visits[index] = { ...visits[index], ...data }
      writeData(visits)
      return visits[index]
    }
    return null
  }

  delete(id) {
    const visits = readData()
    const index = visits.findIndex(v => v.id === id)
    if (index !== -1) {
      const removed = visits.splice(index, 1)[0]
      writeData(visits)
      return removed
    }
    return null
  }
}
