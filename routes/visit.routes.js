import express from 'express'
import {
  listVisits,
  getVisit,
  addVisit,
  editVisit,
  removeVisit
} from '../controllers/visit.controller.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Visitas
 *   description: Endpoints para gerenciar visitas
 */

/**
 * @swagger
 * /api/visits:
 *   get:
 *     summary: Lista todas as visitas
 *     tags: [Visitas]
 *     responses:
 *       200:
 *         description: Lista de visitas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Visit'
 */
router.get('/', listVisits)

/**
 * @swagger
 * /api/visits/{id}:
 *   get:
 *     summary: Retorna uma visita pelo ID
 *     tags: [Visitas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visita encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Visit'
 *       404:
 *         description: Visita não encontrada
 */
router.get('/:id', getVisit)

/**
 * @swagger
 * /api/visits:
 *   post:
 *     summary: Cadastra uma nova visita
 *     tags: [Visitas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VisitInput'
 *     responses:
 *       201:
 *         description: Visita criada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Visit'
 */
router.post('/', addVisit)

/**
 * @swagger
 * /api/visits/{id}:
 *   put:
 *     summary: Atualiza uma visita
 *     tags: [Visitas]
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
 *             $ref: '#/components/schemas/VisitInput'
 *     responses:
 *       200:
 *         description: Visita atualizada
 *       404:
 *         description: Visita não encontrada
 */
router.put('/:id', editVisit)

/**
 * @swagger
 * /api/visits/{id}:
 *   delete:
 *     summary: Remove uma visita
 *     tags: [Visitas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visita removida
 *       404:
 *         description: Visita não encontrada
 */
router.delete('/:id', removeVisit)

export default router
/**
 * @swagger
 * components:
 *   schemas:
 *     Visit:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID da visita
 *         visitorName:
 *           type: string
 *           description: Nome do visitante
 *         visitDate:
 *           type: string
 *           format: date-time
 *           description: Data e hora da visita
 *         notes:
 *           type: string
 *           description: Notas sobre a visita
 *
 *     VisitInput:
 *       type: object
 *       properties:
 *         visitorName:
 *           type: string
 *           description: Nome do visitante
 *         visitDate:
 *           type: string
 *           format: date-time
 *           description: Data e hora da visita
 *         notes:
 *           type: string
 *           description: Notas sobre a visita
 */
