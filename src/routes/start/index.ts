import cors from 'cors'
import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', cors(), async (req: Request, res: Response) => {
    	res.status(200).send({ message: 'Success'})
})

export default router