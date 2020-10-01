const db = require ('.');
const path = require ('path');

async function getFields () {
  try {
    const fields = await db.query('select * from field');
    return fields;
  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  } 
}

module.exports = {
  getFields,
}