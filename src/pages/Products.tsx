import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts } from "../redux/reducers/productReducer"

import { Box, Card, CardActions, CardMedia, Button, Typography, Grid, CardContent } from "@mui/material"

import SortAllProducts from "../components/SortAllProducts"


const Products = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <div style={{ margin: "0 auto" }}>
            <SortAllProducts />
            <Grid container spacing={3} style={{ alignItems: "center", justifyContent: "center", marginTop: "15px" }}>
                {
                    products.map(product => (
                        <Grid key={product.id} item lg={3} md={4} sm={8} xs={10}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.category.image}
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
                                    <Button size="small">Learn More</Button>
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