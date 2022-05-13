module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.BOOLEAN,
    cashforceAdm: DataTypes.BOOLEAN,
  });

  User.associate = (models) => {
    User.hasMany(models.Order,
      { foreignKey: 'userId', as: 'user' });
  };

  return User;
};
