import { File } from "buffer";

interface IUser {
    email: string,
    firstName: string,
    lastName: string,
    image: string,
    pdf: File | null,
}

export { IUser }