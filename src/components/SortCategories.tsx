import { useState } from "react";
import { useAppDispatch } from "../hooks/reduxHook";
import { sortByName, filterByName } from "../redux/reducers/categoryReducer";

import {
    Box,
    FormControl,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper,
    InputBase,
    Divider
} from "@mui/material"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';

const SortCategories = () => {
    const dispatch = useAppDispatch()

    const [typeName, setTypeName] = useState('')
    const [search, setSearch] = useState('')

    const handleSubmit = () => {
        if (typeName === "desc") {
            dispatch(sortByName("desc"))

        } else {

            dispatch(sortByName("asc"))
        }

        setTypeName('')
    }

    const handleSearch = (event: any) => {
        event.preventDefault()

        dispatch(filterByName(search))
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
                <Button
                    style={{ margin: "5px" }}
                    variant="contained"
                    type="submit"
                    value={typeName}
                    onClick={handleSubmit}
                >
                    Sort
                    {typeName === "asc" && <ArrowUpwardIcon />}
                    {typeName === "desc" && <ArrowDownwardIcon />}
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <RadioGroup
                        row
                        aria-labelledby="asc-or-desc"
                        name="radio-buttons-group"
                        onChange={(event) => setTypeName(event.target.value)}
                    >
                        <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
                        <FormControlLabel value="desc" control={<Radio />} label="Descending" />
                    </RadioGroup>
                </FormControl>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "20%", marginLeft: "5px" }}
                    onSubmit={handleSearch}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search categories"
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

export default SortCategories