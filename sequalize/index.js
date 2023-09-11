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

/**
 * Retrieves a list of user names from the database.
 *
 * @return {Promise<Array<User>>} The list of users.
 */
async function getUserNames() {
    const users = await User.findAll({attributes:['name']});
    console.log("All users:",JSON.stringify(users, null,2));
};

/**
 * Retrieves a list of users from the database.
 *
 * @return {Promise<Array<User>>} A promise that resolves to an array of User objects.
 */
async function getUsers() {
    const users = await User.findAll();
    console.log("All users:",JSON.stringify(users, null,2));
};

/**
 * Retrieves a user by their ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<User>} - A promise that resolves to the user object.
 */
async function getUserById(id) {
    const user = await User.findByPk(id);
    console.log("User:",JSON.stringify(user,null,2));
};

/**
 * Retrieves a user by their name from the database.
 *
 * @param {string} name - The name of the user to retrieve.
 * @return {Promise<object>} - A promise that resolves to the user object.
 */
async function getUserByName(name) {
    const user = await User.findOne({where:{name}});
    console.log("User:",JSON.stringify(user,null,2));
};

