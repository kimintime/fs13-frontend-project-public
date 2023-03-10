import { Category } from "./category"

export interface Product {
    id: number
    title: string
    description: string
    price: number
    category: Category
    images: string[]
}

export interface CreateProduct {
    title: string
    description: string
    price: number
    categoryId: number
    images: string[]
}

export interface EditProduct {
    title: string
    description: string
    price: number
    id: number
}

