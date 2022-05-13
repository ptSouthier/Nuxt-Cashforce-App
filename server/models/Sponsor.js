module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: { type: DataTypes.INTEGER, foreignKey: true },
    email: DataTypes.STRING,
  });

  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Sponsor.hasOne(models.Offer, { foreignKey: 'sponsorId', as: 'sponsor' });
  };

  return Sponsor;
};
