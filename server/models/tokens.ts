import db from '.';
import path from 'path';

async function getTokens(): Promise<undefined | {}> {
  try {
    // console.log('db is: ', await db.sequelize.query('select * from token'));
    const tokens: any[] = await db.sequelize.query('select * from token');
    return tokens[0];
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
  }
}

async function selectUserFieldTokens(
  queryStr: string,
): Promise<undefined | {}> {
  try {
    const tokens: {} = await db.sequelize.query(
      `select * from token where ${queryStr}`,
    );
    return tokens;
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
  }
}

export { getTokens, selectUserFieldTokens };
