import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { createProduct, fetchAllProducts, sortByCatagory, sortByName, sortByPrice, } from "../redux/reducers/productReducer"

import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select } from "@mui/material"


const Products = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

    const [type, setType] = useState('')

    const sortName = () => {
        if (type === "desc") {
            dispatch(sortByName("desc"))

        } else {

            dispatch(sortByName("asc"))
        }
    }

    const sortPrice = () => {
        if (type === "desc") {
            dispatch(sortByPrice("desc"))

        } else {

            dispatch(sortByPrice("asc"))
        }
    }

    const sortCategory = () => {
        if (type === "desc") {
            dispatch(sortByCatagory("desc"))

        } else {

            dispatch(sortByCatagory("asc"))
        }
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
        <Box>
            <Box style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    onClick={sortName}
                >
                    Sort
                </Button>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={type}
                        label="Type"
                        onChange={(event) => setType(event.target.value)}
                    >
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    onClick={sortPrice}
                >
                    Sort by Price
                </Button>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={type}
                        label="Type"
                        onChange={(event) => setType(event.target.value)}
                    >
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    onClick={sortCategory}
                >
                    Sort by Category
                </Button>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={type}
                        label="Type"
                        onChange={(event) => setType(event.target.value)}
                    >
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    onClick={addProduct}
                >
                    Add
                </Button>
            </Box>
            <Divider variant="middle" />
            {/* <Button onClick={sortName}>Sort</Button>
            <Button onClick={addProduct}>Add Test Product</Button>
            <Button onClick={sortPrice}>Sort Price</Button>
            <Button onClick={sortCategory}>Sort Category</Button> */}
            {products.map(product => (<p key={product.id}>{product.title} {product.price} {product.category.name}</p>))}
        </Box>
    )
}

export default Products