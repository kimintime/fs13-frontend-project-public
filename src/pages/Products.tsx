import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts } from "../redux/reducers/productReducer"

import { Card, CardActions, CardMedia, Button, Typography, Grid, CardContent } from "@mui/material"

import SortAllProducts from "../components/SortAllProducts"


const Products = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <div>
            <SortAllProducts />
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                {
                    products.map(product => (
                        <Grid item key={product.id} xl={3} lg={3} md={4} sm={8} xs={10}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.images[0]}
                                    title={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title} €{product.price}.00
                                    </Typography>
                                    <Typography variant="h6">
                                        {product.category.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small"
                                        onClick={() => navigate(`${product.id}`) }>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Products