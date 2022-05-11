module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
  });

  Cnpj.associate = (models) => {
    Cnpj.belongsTo(models.Buyer,
      { foreignKey: 'cnpjId', as: 'buyer' });
  };

  return Cnpj;
};
