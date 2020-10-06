import { Request, Response } from 'express';
import { getTokens, selectUserFieldTokens } from '../models/tokens';
import path from 'path';
import { generateFieldTokenQuery } from './helpers';

async function getAllTokens(req: Request, res: Response): Promise<void> {
  try {
    const tokens: {} = await getTokens();
    res.status(200);
    res.send(tokens);
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
    res.sendStatus(500);
  }
}

async function getUserFieldTokens(req: Request, res: Response): Promise<void> {
  try {
    let tokenIds: any = JSON.parse(req.params.tokenIds);
    const { seedTokens, cropTokens } = tokenIds;
    const seedTokenQuery: string = generateFieldTokenQuery(seedTokens);
    const cropTokenQuery: string = generateFieldTokenQuery(cropTokens);
    const returnedTokens: any = {};

    if (seedTokenQuery) {
      const returnedSeed = await selectUserFieldTokens(seedTokenQuery);
      returnedTokens.seedTokens = returnedSeed;
    }
    if (cropTokenQuery) {
      let returnedCrop = await selectUserFieldTokens(cropTokenQuery);
      returnedTokens.cropTokens = returnedCrop;
    }
    if (Object.keys(returnedTokens).length) {
      res.status(200);
      res.send(returnedTokens);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
    res.sendStatus(500);
  }
}

export { getAllTokens, getUserFieldTokens };
