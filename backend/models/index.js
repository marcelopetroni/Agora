import { Sequelize } from 'sequelize';
import { sequelize } from '../config/db.js';
import User from './User.js';
import Project from './Project.js';

User.init(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
  Project
};

export { db };
