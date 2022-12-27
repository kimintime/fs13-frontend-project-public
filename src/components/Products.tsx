import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { createProduct, fetchAllProducts, sortByName } from "../redux/reducers/productReducer"


const Products = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

    const sortName = () => {
        dispatch(sortByName("desc"))
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
            {products.map(product => (<p key={product.id}>{product.title}</p>))}
        </div>
    )
}

export default Products