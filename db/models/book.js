'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    releaseDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    pageCount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    publisher: {
      allowNull: false,
      type: DataTypes.STRING(100)
    }
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};
