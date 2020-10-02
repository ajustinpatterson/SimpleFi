const db = require('.');
const path = require('path');

console.log(getFields());
async function getFields() {
  try {
    const fields = await db.sequelize.query('select * from field');
    return fields[0];
  } catch (err) {
    console.error(
      `Error at ${path.basename(__dirname)}/${path.basename(
        __filename,
      )} ${err}`,
    );
  }
}

module.exports = {
  getFields,
};
