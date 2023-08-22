module.exports = (sequelize, DataTypes) => {
  const UsersData = sequelize.define(
    'UsersData',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile_created_month: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      profile_created_date: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pincode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      OTP: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'UsersData',
      timestamps: true,
    }
  );

  return UsersData;
};
