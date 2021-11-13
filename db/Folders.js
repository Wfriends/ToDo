const Sequlize = require('sequelize');
module.exports = function(sequilize){
    sequilize.define('folder', {
        id:{
           type: Sequlize.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false
        },
        name:{
            type: Sequlize.STRING,
            allowNull: false
         },
         user_id:{
             type: Sequlize.INTEGER,
             allowNull: true
          },
          company_id:{
              type: Sequlize.INTEGER,
              allowNull: true
           }
    }, {
        timestamps: false
    });
}