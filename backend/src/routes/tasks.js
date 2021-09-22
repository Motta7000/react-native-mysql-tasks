import {Router} from 'express';
import {deleteTask, getTask, getTasks, getTasksCount, saveTask,updateTask} from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all tasks
 */

router.get('/tasks',getTasks)
/**
 * @swagger
 * //tasks:
 * get:
 *  summary: Get the total amount of tasks
 */
router.get('/tasks/count',getTasksCount)
/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get a task by id
 */
router.get('/tasks/:id',getTask)
/**
 * @swagger
 * /tasks:
 * post:
 *   summary: creates a new task
 */
router.post('/tasks',saveTask)
/**
 * @swagger
 * /tasks:
 * delete:
 *  summary: delete a task identified by an id
 */
router.delete('/tasks/:id',deleteTask)
/**
 * @swagger
 * /tasks:
 * put:
 *  summary: Updates a task
 */
router.put('/tasks/:id',updateTask)

export default router