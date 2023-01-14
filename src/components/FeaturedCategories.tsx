import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Box, Paper, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchCategories } from "../redux/reducers/categoryReducer"



const FeaturedCategories = () => {
    const categories = useAppSelector(state => state.categoryReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div>
            <Box justifyContent="center" alignItems="center">
                <Carousel>
                    {
                        categories.filter(category => category.id < 6).map(category => (
                            <Paper>
                                <Typography variant="h6" textAlign="center">Browse {category.name}</Typography>
                                <Link to={`/categories/${category.id}/products`}>
                                    <img
                                        key={category.id}
                                        alt={category.name}
                                        src={category.image}
                                        style={{
                                            height: '100%',
                                            width: '100%'
                                        }} />
                                </Link>
                            </Paper>
                        ))
                    }
                </Carousel>
            </Box>
        </div>
    )
}

export default FeaturedCategories