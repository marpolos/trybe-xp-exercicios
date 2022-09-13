const WorkingDaySchema = (sequelize, DataTypes) => {
  const WorkingDayTable = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDate: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {});
  WorkingDayTable.associate = (models) => {
    WorkingDayTable.belongsToMany(models.User, { through: 'UsersWorkingDays', foreignKey: 'workingDayId', as: 'employees' });
  }
  return WorkingDayTable;
}

module.exports = WorkingDaySchema;