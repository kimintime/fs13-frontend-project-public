import { useState } from "react"
import { Box,
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Divider, 
    RadioGroup, 
    FormControlLabel, 
    Radio, 
    Paper, 
    InputBase, 
    IconButton } from "@mui/material"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddProductModal from "./AddProductModal";

import { useAppDispatch } from "../hooks/reduxHook"
import { sortByName,
     sortByPrice, 
     sortByCatagory, 
     filterByName, 
     fetchAllProducts } from "../redux/reducers/productReducer"

const SortAllProducts = () => {
    const dispatch = useAppDispatch()

    const [type, setType] = useState('')
    const [typeCat, setTypeCat] = useState('')
    const [search, setSearch] = useState('')

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

        if (search === "") {
            dispatch(fetchAllProducts())
        }

        setSearch("")
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
                <AddProductModal />
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "20%", marginLeft: 2 }}
                    onSubmit={handleSearch}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search products"
                        inputProps={{ 'aria-label': 'search' }}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <IconButton onClick={() => setSearch("")}>
                        <BackspaceIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleSearch}>
                    <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            <Divider variant="middle" />
        </Box>
    )
}

export default SortAllProducts