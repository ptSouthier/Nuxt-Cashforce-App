module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.BOOLEAN,
    paymentStatusProvider: DataTypes.BOOLEAN,
    orderId:  { type: DataTypes.INTEGER, foreignKey: true },
    sponsorId:  { type: DataTypes.INTEGER, foreignKey: true },
  });

  Offer.associate = (models) => {
    Offer.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
    Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });
  };

  return Offer;
};
