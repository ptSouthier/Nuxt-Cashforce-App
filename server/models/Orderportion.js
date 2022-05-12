module.exports = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define('Orderportion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.BOOLEAN,
    orderId:  { type: DataTypes.INTEGER, foreignKey: true },
  });

  Orderportion.associate = (models) => {
    Orderportion.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
  };

  return Orderportion;
};
