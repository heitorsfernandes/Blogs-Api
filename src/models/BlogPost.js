const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { 
          autoIncrement:true,
          allowNull:false,
          primaryKey:true,
          type: DataTypes.INTEGER 
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.STRING,
        updated: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'users',
        underscored: true,
    })

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        })
    };

    return BlogPost;
}