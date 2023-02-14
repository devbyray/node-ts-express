import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express, { Express, NextFunction, Request, Response }  from 'express'
import cors from 'cors'

import startRouter from '@Routes/start'

const app = express();
const port = process.env.PORT || 3002;

app.use(
	(
		req: Request,
		res: Response,
		next: NextFunction
	): void => {
		if (req.originalUrl.includes('webhook')) {
			next();
		} else {
			express.json()(req, res, next);
		}
	}
);

app.use(cors())


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/start', startRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});