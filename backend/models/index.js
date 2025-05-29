import { Sequelize } from 'sequelize';
import { sequelize } from '../config/db.js';
import User from './User.js';
import Artist from './Artist.js';
import Hirer from './Hirer.js';
import Project from './Project.js';

User.init(sequelize, Sequelize.DataTypes);
Project.init(sequelize, Sequelize.DataTypes);
Artist.init(sequelize, Sequelize.DataTypes);
Hirer.init(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
  Artist,
  Hirer,
  Project
};

export { db };
