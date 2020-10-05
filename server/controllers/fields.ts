import { Express, Request, Response, NextFunction, response } from 'express';
import { getFields } from '../models/fields';

async function getAllFields(req: Request, res: Response): Promise<void> {
  try {
    const fields: {} = await getFields();
    res.status(200);
    res.send(fields);
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
    res.sendStatus(500);
  }
}

export { getAllFields };
