import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"

import { fetchCategories } from "../redux/reducers/categoryReducer"
import SortCategories from "../components/SortCategories"

import { Box, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';




const BrowseCategories = () => {
    const categories = useAppSelector(state => state.categoryReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div>
            <SortCategories />
            <Box justifyContent="center" alignItems="center">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item md={8}>
                        <ImageList cols={3}>
                            {
                                categories.map(category => (
                                    <ImageListItem key={category.id}>
                                        <img
                                            src={`${category.image}?w=248&fit=crop&auto=format`}
                                            srcSet={`${category.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={category.name}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={category.name}
                                            actionIcon={
                                                <IconButton
                                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                    aria-label={`info about ${category.name}`}
                                                    onClick={() => navigate(`${category.id}/products`) }
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            }
                                        />
                                    </ImageListItem>
                                ))
                            }
                        </ImageList>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default BrowseCategories