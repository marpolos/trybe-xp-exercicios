const CompanySchema = (sequelize, DataTypes) => {
  const CompanyTable = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {});
  CompanyTable.associate = (models) => {
    CompanyTable.hasMany(models.User, { as: 'employees'});
  }
  return CompanyTable;
};

module.exports = CompanySchema;