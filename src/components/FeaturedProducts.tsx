import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts } from "../redux/reducers/productReducer"

import { Card, CardActions, CardMedia, Button, Typography, CardContent } from "@mui/material"
import { Box } from "@mui/system"

const FeaturedProducts = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <Box style={{ display: "flex", flexDirection: "row" }}>
            {
                products.filter(product => product.id > 38 && product.id < 44).map(product => (

                    <Box key={product.id} justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 345, height: 425, margin: 2 }}>
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
                                    onClick={() => navigate(`${product.id}`)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </Box>
    )
}

export default FeaturedProducts