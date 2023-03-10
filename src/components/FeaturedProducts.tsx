import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Box, Card, CardActions, CardMedia, Button, Typography, CardContent, Divider } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { fetchAllProducts } from "../redux/reducers/productReducer"
import { CartItem } from "../types/cart";
import { addToCart } from "../redux/reducers/cartReducer";

const FeaturedProducts = () => {
    const products = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

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

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <Box style={{ display: "flex", flexDirection: "row" }}>
            {
                products.filter(product => product.id > 45 && product.id < 51).map(product => (

                    <Box key={product.id} justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300, height: 400, margin: 2 }}>
                            <Link to={`/products/${product.id}`}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.images[0]}
                                    title={product.title}
                                />
                            </Link>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" align="center">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle2" align="center">
                                    {product.category.name}
                                </Typography>
                                <Divider variant="middle" />
                                <Typography gutterBottom variant="h6" align="center">
                                    ???{product.price}.00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box textAlign="center">
                                    <Link to={`/products/${product.id}`}>
                                        <Button
                                            size="small"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
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
                    </Box>
                ))
            }
        </Box>
    )
}

export default FeaturedProducts