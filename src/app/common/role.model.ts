export enum RoleData {
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
    ATTENDANT = 'ATTENDANT',
    ADMINISTRATOR = 'ADMINISTRATOR',
}

export function getRole(role: string): RoleData {
    switch (role) {
        case 'STUDENT':
            return RoleData.STUDENT
        case 'TEACHER':
            return RoleData.TEACHER
        case 'ATTENDANT':
            return RoleData.ATTENDANT
        case 'ADMINISTRATOR':
            return RoleData.ADMINISTRATOR    
        default:
            return RoleData.ADMINISTRATOR
    }
}