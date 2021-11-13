const Sequlize = require('sequelize');
const sequilize = new Sequlize("todo", "mysql", "musql", {
    dialect: "mysql",
    host: "localhost"
});
const Folder = require('./Folders')(sequilize);
module.exports = {
    sequilize: sequilize, 
    folder: Folder
}