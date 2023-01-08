import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"

import { fetchCategories } from "../redux/reducers/categoryReducer"

import { Box, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';


const FeaturedCategories = () => {
    const categories = useAppSelector(state => state.categoryReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div>
            <Box justifyContent="center" alignItems="center">
                <ImageList cols={3}>
                    {
                        categories.filter(category => category.id < 7).map(category => (
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
                                        <Link to={`/categories/${category.id}/products`}>
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${category.name}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        </Link>
                                    }
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
        </div>
    )
}

export default FeaturedCategories