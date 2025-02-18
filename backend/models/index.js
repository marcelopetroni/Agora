import { Sequelize } from 'sequelize';
import { sequelize } from '../config/db.js';
import User from './User.js';

User.init(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
};

export { db };
