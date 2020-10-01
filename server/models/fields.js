const db = require ('.');
const path = require ('path');

async function getFields () {
  try {
    const fields = await db.query('select * from field');
    console.log('fields', fields)
    console.log('fields rows', fields.rows)
    return fields;
  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  } 
}

module.exports = {
  getFields,
}