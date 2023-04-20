import { Request, Response } from "express";
import { db } from "../db/db.js"

interface ICreateUser {
    email: string,
    firstName: string,
    lastName: string
}

class UserController {
    async createUser(req: Request, res: Response) {
        const { email, firstName, lastName }: ICreateUser = req.body;

        const newPerson = await db.query(`INSERT INTO user_tab (email, firstname, lastname) values ($1, $2, $3) RETURNING *`, [email, firstName, lastName])
        res.json(newPerson.rows[0])
    }

    async getUser(req: Request, res: Response) {

    }

    async updateUser(req: Request, res: Response) {

    }

    async deleteUser(req: Request, res: Response) {

    }
}

export default new UserController();

