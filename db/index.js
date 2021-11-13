const Sequlize = require('sequelize');
const config = require('./config');
const sequilize = new Sequlize(config.database, config.user, config.password, {
    dialect: "mysql",
    host: config.host
});
const Folder = require('./Folders')(sequilize);
module.exports = {
    sequilize: sequilize, 
    folder: Folder
}