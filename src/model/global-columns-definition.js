const { DataTypes } = require('sequelize');

module.exports = {
  created_at: DataTypes.DATE,
  created_by: {
    type:DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  updated_at: DataTypes.DATE,
  updated_by: {
    type:DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  deleted_at: DataTypes.DATE,
  deleted_by: {
    type:DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  is_deleted: DataTypes.BOOLEAN
}