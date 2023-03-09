import { RoleData } from "../role.model"

export interface UserPageRequest {
    page?: number
    size?: number
    sort?: string
    role?: RoleData
}