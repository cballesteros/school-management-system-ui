import { RoleData } from "../common/role.model";

export interface UserData {
    id: string,
    idType: string,
    idNumber: string,
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    role: RoleData
}