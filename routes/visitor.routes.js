import express from 'express'
import {
  listVisitors,
  getVisitor,
  addVisitor,
  editVisitor,
  removeVisitor
} from '../controllers/visitor.controller.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Visitantes
 *   description: Endpoints para gerenciar visitantes
 */

/**
 * @swagger
 * /api/visitors:
 *   get:
 *     summary: Lista todos os visitantes
 *     tags: [Visitantes]
 *     responses:
 *       200:
 *         description: Lista de visitantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Visitor'
 */
router.get('/', listVisitors)

/**
 * @swagger
 * /api/visitors/{id}:
 *   get:
 *     summary: Retorna um visitante pelo ID
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Visitor'
 *       404:
 *         description: Visitante não encontrado
 */
router.get('/:id', getVisitor)

/**
 * @swagger
 * /api/visitors:
 *   post:
 *     summary: Cadastra um novo visitante
 *     tags: [Visitantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VisitorInput'
 *     responses:
 *       201:
 *         description: Visitante criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Visitor'
 */
router.post('/', addVisitor)

/**
 * @swagger
 * /api/visitors/{id}:
 *   put:
 *     summary: Atualiza um visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VisitorInput'
 *     responses:
 *       200:
 *         description: Visitante atualizado
 *       404:
 *         description: Visitante não encontrado
 */
router.put('/:id', editVisitor)

/**
 * @swagger
 * /api/visitors/{id}:
 *   delete:
 *     summary: Remove um visitante
 *     tags: [Visitantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitante removido
 *       404:
 *         description: Visitante não encontrado
 */
router.delete('/:id', removeVisitor)

export default router
/**
 * @swagger
 * components:
 *   schemas:
 *     Visitor:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         document:
 *           type: string
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     VisitorInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         document:
 *           type: string
 *         phone:
 *           type: string
 */
