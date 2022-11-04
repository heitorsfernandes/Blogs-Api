const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
    }, {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    })

    PostCategory.associate = (models) => {

        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'blog_post',
            through: PostCategory,
        })

        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'categoryId',
            otherKey: 'postId',
            as: 'categories',
            through: PostCategory,
        })
    };

    return PostCategory;
}