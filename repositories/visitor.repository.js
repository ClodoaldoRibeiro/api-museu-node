import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import { Visitor } from '../models/visitor.model.js'

const FILE = './data/visitors.json'

function readData() {
  if (!fs.existsSync(FILE)) return []
  return JSON.parse(fs.readFileSync(FILE))
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
}

export class VisitorRepository {
  getAll() {
    return readData()
  }

  getById(id) {
    return readData().find(v => v.id === id)
  }

  create({ name, email, phone }) {
    const visitors = readData()
    const newVisitor = new Visitor({ id: uuidv4(), name, email, phone })
    visitors.push(newVisitor)
    writeData(visitors)
    return newVisitor
  }

  update(id, data) {
    const visitors = readData()
    const index = visitors.findIndex(v => v.id === id)
    if (index !== -1) {
      visitors[index] = { ...visitors[index], ...data }
      writeData(visitors)
      return visitors[index]
    }
    return null
  }

  delete(id) {
    const visitors = readData()
    const index = visitors.findIndex(v => v.id === id)
    if (index !== -1) {
      const removed = visitors.splice(index, 1)[0]
      writeData(visitors)
      return removed
    }
    return null
  }
}
