const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data.db'
});


/**
 * Represents a user.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} favoriteColor - The favorite color of the user.
 * @property {number} age - The age of the user.
 * @property {number} cash - The amount of cash the user has.
 */
const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});



// Synchronize the models and add to database
sequelize.sync();


/**
 * Creates a new user.
 * @param {string} name - The name of the user.
 * @param {string} [favoriteColor='green'] - The favorite color of the user.
 * @param {number} age - The age of the user.
 * @param {number} cash - The amount of cash the user has.
 * @returns {User} The newly created user.
 */
async function addUser(name, favoriteColor, age, cash) {
    
    const user = await User.create({
        name,
        favoriteColor,
        age,
        cash
    });
    console.log(user.toJSON());
};

/**
 * Deletes a user from the database based on the provided ID.
 *
 * @param {number} id - The ID of the user to be deleted.
 * @return {Promise<void>} - A promise that resolves once the user has been deleted.
 */
async function delUser(id) {
    await User.destroy({
        where: {
            id
        }
    });
};


// Test the User model by creating a new user

















module.exports = { sequelize, User, addUser };