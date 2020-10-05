import db from './';
import path from 'path';

async function getFields(): Promise<string> {
  try {
    const fields: {} = await db.sequelize.query('select * from field');
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
