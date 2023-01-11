export type Role = "admin" | "customer"

export interface User {
    id: number
    email: string
    password: string
    name: string
    role: Role
    avatar: string
}

export interface UserList {
    userList: User[]
    currentUser: User
    access_token?: string
}

export interface CreateUser {
    name: string
    email: string
    password: string
    avatar: URL
}

export interface EditUser {
    name: string
    email: string
    password: string
}

export interface Credentials {
    email: string
    password: string
}

export interface ReturnedCredentials {
    access_token: string
}

export type menu = {
    id: number
    state: string
    action: () => void
}

