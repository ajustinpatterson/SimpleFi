const fields = require('../models/fields');
require('dotenv').config();
const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};
const path = require('path');

beforeAll(async () => {
  const sequelize = await new Sequelize(
    process.env.DATABASE,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
      //REL reminder to change the table name
      host: 'localhost',
      dialect: 'postgres',
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  );
});

describe('changeUserName', () => {
  it('should update username in db', async () => {
    const db = { getRepository: jest.fn() };
    const repository = { updateUserName: jest.fn() };

    db.getRepository.mockReturnValue(repository);
    repository.updateUserName.mockReturnValue(Promise.resolve('updated'));

    const result = await changeUserName(db, '1', 'username');

    expect(result).toEqual('updated');
    expect(repository.updateUserName).toHaveBeenCalledTimes(1);
    expect(repository.updateUserName).toHaveBeenCalledWith('1', 'username');
  });
});

// describe('getFields', () => {
//   test('should get all fields from db', async () => {
//     try {
//       expect(fields.getFields().length).toBeTruthy();
//     } catch (err) {}
//   }),
//     test('should return an array with a length of 2', () => {
//       try {
//         expect(fields.getFields().length).toHaveBeenCalled();
//       } catch (err) {}
//     });
// });
