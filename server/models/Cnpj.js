module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
  });

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Buyer, { foreignKey: 'cnpjId', as: 'buyer' });
    Cnpj.hasOne(models.Provider, { foreignKey: 'cnpjId', as: 'provider' });
    Cnpj.hasOne(models.Sponsor, { foreignKey: 'cnpjId', as: 'sponsor' });
  };

  return Cnpj;
};
