import { Sequelize, DataType, Model, DataTypes } from 'sequelize';

export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const UserFactory = (
  sequelize: Sequelize,
  DataType: DataType,
): Model<UserAttributes> => {
  const User: any = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
