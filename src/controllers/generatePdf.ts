import { Request, Response } from "express";
import PDFDocument from "pdfkit"
import fs from "fs"
import path from "path";
import User from "../models/User.js";

type email = {
    email: string
}

class GeneratePdf {

    async generatePdf(req: Request, res: Response) {
        const { email }: email = req.body

        const user = await User.findAll({ where: { email } })
        if (user) {
            const doc = new PDFDocument();
            const person = user[0]
            const filePdfName = person.email + ".pdf";
            doc.pipe(fs.createWriteStream(path.resolve('static', filePdfName)));
            doc.text(person.firstName + " " + person.lastName, 100, 100)
            if (person.image) doc.image(path.join("static/") + person.image)
            doc.end()
            person.set({
                pdf: filePdfName
            })
            await person.save();

        }

        res.json(user)
    }
}

export default new GeneratePdf();