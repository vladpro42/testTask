import { Request, Response } from "express";
import { db } from "../db/db.js"

interface ICreateUser {
    email?: string,
    firstName?: string,
    lastName?: string
}

class UserController {
    async createUser(req: Request, res: Response) {
        const { email, firstName, lastName }: ICreateUser = req.body;

        const newPerson = await db.query(`INSERT INTO user_tab (email, firstname, lastname) values ($1, $2, $3) RETURNING *`, [email, firstName, lastName])
        res.json(newPerson.rows[0])
    }

    async getUser(req: Request, res: Response) {
        const email: string = req.params.email;
        const user = await db.query("SELECT * FROM user_tab where email = $1", [email])
        res.json(user.rows[0])
    }

    async updateUser(req: Request, res: Response) {
        const { email, firstName, lastName }: ICreateUser = req.body;
        const newPerson = await db.query("UPDATE user_tab set firstName = $1, lastName = $2 where email = $3 RETURNING *", [firstName, lastName, email]);
        res.json(newPerson.rows[0])
    }

    async deleteUser(req: Request, res: Response) {
        const email: string = req.params.email;
        const user = await db.query("DELETE FROM user_tab where email = $1", [email])
        res.json({ messge: true })
    }
}

export default new UserController();

