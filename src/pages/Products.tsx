import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardActions, CardMedia, Button, Typography, Grid, CardContent, Box, Divider } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts } from "../redux/reducers/productReducer"
import SortAllProducts from "../components/SortAllProducts"
import { CartItem } from "../types/cart"
import { addToCart } from "../redux/reducers/cartReducer"

const Products = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    let product: CartItem = {
        id: 0,
        title: '',
        category: { name: '', id: 0, image: '' },
        description: '',
        price: 0,
        images: [],
        amount: 1,
    }

    const handleAddToCart = (data: any) => {
        product = data
        dispatch(addToCart(product))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <SortAllProducts />
            <Box display="flex" justifyContent="center" alignItems="center">
                <Grid container spacing={3} mt={1} justifyContent="center" alignItems="center" maxWidth="md">
                    {
                        products.map(product => (
                            <Grid item key={product.id} md={4} sm={8} xs={10} justifyContent="center">
                                <Card sx={{ maxWidth: 300, height: 400 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={product.images[0]}
                                        title={product.title}
                                        onClick={() => navigate(`${product.id}`)}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" align="center">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="subtitle2" align="center">
                                            {product.category.name}
                                        </Typography>
                                        <Divider variant="middle" />
                                        <Typography gutterBottom variant="h5" align="center">€{product.price}.00</Typography>         
                                    </CardContent>
                                    <CardActions>
                                        <Box textAlign="center">
                                            <Button
                                                size="small"
                                                onClick={() => navigate(`${product.id}`)}
                                            >
                                                Learn More
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="success"
                                                endIcon={<AddShoppingCartIcon />}
                                                style={{ marginLeft: "10px" }}
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                Add to Cart
                                            </Button>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default Products