import { Request, Response } from 'express';
import { getTokens, selectUserFieldTokens } from '../models/tokens';
import path from 'path';
import { generateFieldTokenQuery } from './helpers';

async function getAllTokens(req: Request, res: Response): Promise<void> {
  try {
    const tokens: undefined | {} = await getTokens();
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
    const {
      seedTokens,
      cropTokens,
    }: { seedTokens: undefined & {}; cropTokens: undefined & {} } = JSON.parse(
      req.params.tokenIds,
    );
    const seedTokenQuery: string = generateFieldTokenQuery(seedTokens);
    const cropTokenQuery: string = generateFieldTokenQuery(cropTokens);
    const returnedTokens:
      | { seedTokens: undefined | {}; cropTokens: undefined | {} }
      | undefined = {
      seedTokens,
      cropTokens,
    };
    if (seedTokenQuery) {
      const returnedSeed: undefined | {} = await selectUserFieldTokens(
        seedTokenQuery,
      );
      returnedTokens.seedTokens = returnedSeed;
      console.log(returnedTokens);
    }
    if (cropTokenQuery) {
      let returnedCrop: undefined | {} = await selectUserFieldTokens(
        cropTokenQuery,
      );
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
