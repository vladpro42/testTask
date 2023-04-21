import { Request, Response } from "express";
import User from "../models/User.js";
import { File } from "buffer";
import fileService from "../service/fileService.js"

interface IBody {
    email: string;
    firstName: string;
    lastName: string;
    image?: File;
    pdf?: string;
}

class userControllerOrm {

    async createUser(req: Request, res: Response) {
        try {
            const { email, firstName, lastName, pdf }: IBody = req.body;

            const picture = req.files;
            const fileName = fileService.saveFile(picture)

            if (!email && firstName && lastName) {
                res.status(400).send({
                    message: "Content can not be empty"
                });
                return; ``
            }

            const person = await User.create({
                email,
                firstName,
                lastName,
                image: fileName,
                pdf,
            })

            person.save();
            res.json(person)

        } catch (error: any) {
            res.status(500).send({
                message: error.message
            })
            console.log(error)
        }
    };

    async findAllUsers(req: Request, res: Response) {
        try {
            const users = await User.findAll();
            res.json(users)

        } catch (error: any) {
            res.status(500).send({
                message: error.message
            })
        }
    };

    async findOneUser(req: Request, res: Response) {
        try {
            const email: string = req.params.email

            const users = await User.findAll({ where: { email } });
            res.json(users)

        } catch (error: any) {
            res.status(500).send({
                message: error.message
            })
        }
    };

    async updateUser(req: Request, res: Response) {
        try {
            const { email, firstName, lastName, image, pdf }: IBody = req.body;

            if (!email) {
                res.status(400).send({
                    message: "Пользователь с таким email не найден"
                });
                return;
            }
            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                throw Error(`Job not updated. email: ${email}`);
            }
            await user.update({
                firstName,
                lastName,
                pdf,
                image
            })
            user.save();
            res.json(user)

        } catch (error: any) {
            res.status(500).send({
                message: error.message || "Some error occurred while creating the Tutorial."
            })
            console.log(error)
        }
    };

    async deleteUser(req: Request, res: Response) {
        const email: string = req.params.email;

        if (!email) {
            res.status(400).send({
                message: "Пользователь с таким email не найден"
            });
            return;
        }

        const user = await User.findOne({ where: { email } })

        if (!user) {
            res.status(400).send({
                message: "Пользователя с таким email не существует"
            });
            return;
        }

        await user.destroy();
        res.json("Юзер успешно удален");
    };

    async deleteAllUsers(req: Request, res: Response) {
        const result = await User.destroy({
            where: {},
            truncate: true
        })

        res.json("Таблица очищена")
    };
}

export default new userControllerOrm();