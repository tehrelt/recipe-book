const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    picture: {type: DataTypes.BLOB, allowNull: true}
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Favorites = sequelize.define('favorites', {})

const Dish = sequelize.define('dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.BLOB, allowNull: true},
    cooking_time: {type: DataTypes.INTEGER, allowNull: false}
})

const Cookery = sequelize.define('cookery', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const Ingridient = sequelize.define('ingridients', {
    name: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, allowNull: false}
})

const Unit = sequelize.define('unit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, allowNull: false, unique: true},
    short_name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

Role.hasMany(User)
User.belongsTo(Role)


User.hasMany(Dish)
Dish.belongsTo(User)

Cookery.hasMany(Dish)
Dish.belongsTo(Cookery)

Dish.hasMany(Ingridient)
Ingridient.belongsTo(Dish)

Unit.hasMany(Ingridient)
Ingridient.belongsTo(Unit)

Dish.belongsToMany(User, {through: Favorites})
User.belongsToMany(Dish, {through: Favorites})

module.exports = {
    Cookery,
    Dish,
    Favorites,
    Ingridient,
    Role,
    Unit,
    User
}