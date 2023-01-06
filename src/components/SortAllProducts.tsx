import { useEffect, useState } from "react"
import { useAppDispatch } from "../hooks/reduxHook"
import { sortByName, sortByPrice, sortByCatagory, createProduct, filterByName } from "../redux/reducers/productReducer"

import { Box, Button, FormControl, InputLabel, Select, MenuItem, Divider, RadioGroup, FormControlLabel, Radio, Paper, InputBase } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';

const SortAllProducts = () => {
    const dispatch = useAppDispatch()

    const [type, setType] = useState('')
    const [typeCat, setTypeCat] = useState('')
    const [search, setSearch] = useState('')

    console.log(search)

    const handleSubmit = () => {
        if (typeCat === "name") {

            if (type === "desc") {
                dispatch(sortByName("desc"))

            } else {
                dispatch(sortByName("asc"))
            }
        }

        if (typeCat === "price") {

            if (type === "desc") {
                dispatch(sortByPrice("desc"))

            } else {

                dispatch(sortByPrice("asc"))
            }
        }

        if (typeCat === "category") {

            if (type === "desc") {
                dispatch(sortByCatagory("desc"))

            } else {

                dispatch(sortByCatagory("asc"))
            }

        }
        setTypeCat('')
        setType('')
    }

    const handleSearch = (event: any) => {
        event.preventDefault()
        dispatch(filterByName(search))
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
            <Box
                style={{
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, }}>
                    <InputLabel>Sort by:</InputLabel>
                    <Select
                        value={typeCat}
                        label="Category"
                        onChange={(event) => setTypeCat(event.target.value)}
                    >
                        <MenuItem value="name">Sort by Name</MenuItem>
                        <MenuItem value="price">Sort by Price</MenuItem>
                        <MenuItem value="category">Sort by Category</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    style={{ margin: "5px" }}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sort
                    {type === "asc" && <ArrowUpwardIcon />}
                    {type === "desc" && <ArrowDownwardIcon />}
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <RadioGroup
                        row
                        aria-labelledby="asc-or-desc"
                        name="radio-buttons-group"
                        onChange={(event) => setType(event.target.value)}
                    >
                        <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
                        <FormControlLabel value="desc" control={<Radio />} label="Descending" />
                    </RadioGroup>
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    onClick={addProduct}
                >
                    Add
                </Button>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "20%", marginLeft: "5px" }}
                    onSubmit={handleSearch}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search products"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <SearchIcon />
                </Paper>
            </Box>
            <Divider variant="middle" />
        </Box>

    )
}

export default SortAllProducts