const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Creates a Category class that inherits features from the Model class
class Category extends Model {}

// This will initialize table for Category class
// 1st parameter is an object that contains category table
// 2nd parameter is a configuration for where this table and how this table will be created
Category.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER, 
      allowNull : false, 
      primaryKey: true,
      autoIncrement: true
    },
    // define a category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {      
    sequelize, // this tells sequelize which database this table should be created for
    timestamps: false, // this will creat 2 columns "created_at" and "updated_at" that is automatically managed by the database
    freezeTableName: true, // disable the modification of tablenames; By default, sequelize will automatically, transform all passed model names (first parameter of define) into plural.
                            // if you don't want that, set freezeTableName to True
    underscored: true,     // don't use camelcase for automatically added attributes but underscore style, so updatedAt will be updated_at
    modelName: 'category',
  }
);

module.exports = Category;