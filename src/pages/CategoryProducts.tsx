import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchProductsByCategory } from "../redux/reducers/productReducer"
import SortAllProducts from "../components/SortAllProducts"

import { Card, CardActions, CardMedia, Button, Typography, Grid, CardContent } from "@mui/material"

const CategoryProducts = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect(() => {

        dispatch(fetchProductsByCategory(Number(id)))
    }, [dispatch, id])

    return (
        <div style={{display: "flex", flexDirection: "column", margin: 20}}>
            <SortAllProducts />
            <Grid container spacing={3} justifyContent="center" alignItems="center" mt={5}>
                {
                    products.map(product => (
                        <Grid item key={product.id} xl={3} lg={3} md={4} sm={8} xs={10}>
                            <Card sx={{ maxWidth: 345, height: 400 }}>
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
                                    <Link to={`/products/${product.id}`}>
                                        <Button
                                            size="small"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default CategoryProducts