import db from './';
import path, { toNamespacedPath } from 'path';

declare module namespace {
  export interface YieldType {
    yield: string;
    fees: string;
  }

  export interface Instructions {
    how: string;
  }
}

export interface RootObject {
  field_id: string;
  name: string;
  protocol_id: string;
  address: string;
  yield_type: namespace.YieldType;
  instructions: namespace.Instructions;
  risk_level: number;
  seed_token_1: string;
  seed_token_2: string;
  seed_token_3?: any;
  seed_token_4?: any;
  crop_token_1: string;
  crop_token_2?: any;
  receipt_token: string;
}

async function getFields(): Promise<undefined | {}> {
  try {
    const fields: any[] = await db.sequelize.query('select * from field');
    return fields[0];
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
  }
}

export { getFields };
