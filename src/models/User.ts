import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./db.config.js";
import { File } from "buffer";

interface IUser {
    email: string,
    firstName: string,
    lastName: string,
    image?: string,
    pdf?: File | null | string,
}

interface UserCreationAttributes extends Optional<IUser, "pdf"> { }

interface UserInstance
    extends Model<IUser, UserCreationAttributes>,
    IUser { }

const User = sequelize.define<UserInstance>("user_table", {
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

export default User
