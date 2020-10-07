import { Sequelize, Model, DataTypes } from 'sequelize';

export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const UserFactory = (sequelize: Sequelize, DataTypes: any): any => {
  return sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false },
  );
};
