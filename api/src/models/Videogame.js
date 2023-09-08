const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Videogame",
    {
      id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      },
     

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      platforms: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    { timestamps: false }
  );
};
