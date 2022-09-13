const UsersWorkingDaySchema = (sequelize, DataTypes) => {
  const UsersWorkingDaysTable = sequelize.define('UsersWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {});

  UsersWorkingDaysTable.associate = (models) => {
    UsersWorkingDaysTable.belongsTo(models.User, { foreinKey: 'userId' });
    UsersWorkingDaysTable.belongsTo(models.WorkingDay, { foreignKey: 'workingDayId' })
  }
  return UsersWorkingDaysTable;
}

module.exports = UsersWorkingDaySchema;