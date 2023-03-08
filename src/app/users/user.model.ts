import { RoleData } from "../common/role.model";

export interface UserData {
    id: string,
    idType: string,
    idNumber: string,
    username: string,
    password: string,
    email: string,
    firstName: string,
    secondName: string,
    lastName: string,
    secondLastName: string,
    role: RoleData
}