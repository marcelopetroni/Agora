import { Sequelize } from 'sequelize';
import { sequelize } from '../config/db.js';

// 1. Importe TODAS as classes dos seus modelos
import User from './User.js';
import Artist from './Artist.js';
import Hirer from './Hirer.js';
import Project from './Project.js';
import Post from './Post.js';
import Media from './Media.js';

const db = {};


db.User = User.init(sequelize, Sequelize.DataTypes);
db.Project = Project.init(sequelize, Sequelize.DataTypes);
db.Artist = Artist.init(sequelize, Sequelize.DataTypes);
db.Hirer = Hirer.init(sequelize, Sequelize.DataTypes);
db.Post = Post.init(sequelize, Sequelize.DataTypes);
db.Media = Media.init(sequelize, Sequelize.DataTypes);

Object.values(db).forEach(model => {
  if (model && model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
