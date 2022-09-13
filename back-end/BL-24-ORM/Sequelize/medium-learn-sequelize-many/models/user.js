const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});

  UserTable.associate = (models) => {
    UserTable.belongsTo(models.Company, { foreignKey: 'companyId', as: 'company' });
    UserTable.belongsToMany(models.WorkingDay, { through: 'UsersWorkingDays',
  foreinKey: 'userId', as: 'days' });
  }
  return UserTable;
}

module.exports = UserSchema;