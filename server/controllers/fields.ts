import { Express, Request, Response, NextFunction } from 'express';
const Fields = require('../models/fields');

async function getFields(req: Request, res: Response) {
  try {
    const fields = await Fields.getFields();
    res.status = 200;
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

module.exports = {
  getFields,
};
