import { handler } from '@src/index';
import type { Express, Request, Response } from 'express';
import express from 'express';
const app: Express = express();
const port = 3000;

app.get('/email', async (req: Request, res: Response) => {
    const response = await handler();
    res.send(response.body);
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Local server listening on port ${port}`);
});