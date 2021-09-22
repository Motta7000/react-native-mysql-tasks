import express from 'express';
import tasksRoutes from './routes/tasks'
import cors from 'cors'
import morgan from 'morgan'
const app = express();
import {options} from './swaggerOptions'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const specs = swaggerJSDoc(options)

app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(tasksRoutes);

app.use('/docs',swaggerUI.serve,swaggerUI.setup(specs))
export default app;