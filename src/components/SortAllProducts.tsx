import { useState } from "react"
import { useAppDispatch } from "../hooks/reduxHook"
import { sortByName, sortByPrice, sortByCatagory, createProduct } from "../redux/reducers/productReducer"

import { Box, Button, FormControl, InputLabel, Select, MenuItem, Divider } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SortAllProducts = () => {
    const dispatch = useAppDispatch()

    const [typeName, setTypeName] = useState('')
    const [typeCat, setTypeCat] = useState('')
    const [typePrice, setTypePrice] = useState('')

    const sortName = () => {
        if (typeName === "desc") {
            dispatch(sortByName("desc"))

        } else {

            dispatch(sortByName("asc"))
        }

        setTypeName("")
    }

    const sortPrice = () => {
        if (typePrice === "desc") {
            dispatch(sortByPrice("desc"))

        } else {

            dispatch(sortByPrice("asc"))
        }

        setTypePrice("")
    }

    const sortCategory = () => {
        if (typeCat === "desc") {
            dispatch(sortByCatagory("desc"))

        } else {

            dispatch(sortByCatagory("asc"))
        }

        setTypeCat("")
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
                    {typeName === "asc" && <ArrowUpwardIcon />}
                    {typeName === "desc" && <ArrowDownwardIcon />}
                </Button>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={typeName}
                        label="Type"
                        onChange={(event) => setTypeName(event.target.value)}
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
                    {typePrice === "asc" && <ArrowUpwardIcon />}
                    {typePrice === "desc" && <ArrowDownwardIcon />} 
                </Button>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={typePrice}
                        label="Type"
                        onChange={(event) => setTypePrice(event.target.value)}
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
                    {typeCat === "asc" && <ArrowUpwardIcon />}
                    {typeCat === "desc" && <ArrowDownwardIcon />}
                </Button>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={typeCat}
                        label="Type"
                        onChange={(event) => setTypeCat(event.target.value)}
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
        </Box>

    )
}

export default SortAllProducts