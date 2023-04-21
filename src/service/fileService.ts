import * as uuid4 from "uuid"
import path from "path";

class FileService {
    saveFile(file: any) {
        try {
            const arr: string[] = file.image.name.split(".")
            const fileName = uuid4.v4() + "." + arr[1]
            const filePath = path.resolve("static", fileName);
            file.image.mv(filePath)
            return fileName;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new FileService();