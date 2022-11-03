const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: { 
          autoIncrement:true,
          allowNull:false,
          primaryKey:true,
          type: DataTypes.INTEGER 
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'users',
        underscored: true,
    })

    // User.associate = (models) => {
    //     User.hasMany(models.BlogPost, {
    //         foreignKey: 'user_id',
    //         as: 'blog_post'
    //     })
    // };

    return User;
}