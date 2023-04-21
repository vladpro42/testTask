import Sequelize from "sequelize";
import sequelize from "./db.config.js";

const User = sequelize.define("user_table", {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING, 
    },
    pdf: {
        type: Sequelize.STRING,
    },
})

export default User;
