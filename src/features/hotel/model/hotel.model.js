const HotelSchema = (sequelize, DataTypes) => {
  const Hotel = sequelize.define("hotel", {
    name: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    review: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
  });
  return Hotel;
};

module.exports = HotelSchema;
