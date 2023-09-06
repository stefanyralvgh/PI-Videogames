const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
