'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
    expires: DataTypes.DATE,
    data: DataTypes.STRING
  }, {});
  session.associate = function(models) {
    // associations can be defined here
  };
  return session;
};