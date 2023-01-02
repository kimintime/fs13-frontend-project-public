import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { createProduct, fetchAllProducts, sortByCatagory, sortByName, sortByPrice,  } from "../redux/reducers/productReducer"


const Products = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

    const sortName = () => {
        dispatch(sortByName("desc"))
    }

    const sortPrice = () => {
        dispatch(sortByPrice("desc"))
    }

    const sortCategory = () => {
        dispatch(sortByCatagory("desc")) 
    }

    const addProduct = () => {
        dispatch(createProduct({
            title: "New Test Product",
            price: 10,
            description: "A description",
            categoryId: 1,
            images: ["https://placeimg.com/640/480/any"],
        }))
    }

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <div>
            <button onClick={sortName}>Sort</button>
            <button onClick={addProduct}>Add Test Product</button>
            <button onClick={sortPrice}>Sort Price</button>
            <button onClick={sortCategory}>Sort Category</button>
            {products.map(product => (<p key={product.id}>{product.title} {product.price} {product.category.name}</p>))}
        </div>
    )
}

export default Products