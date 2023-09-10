import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Box, Card, CardActions, CardMedia, Button, Typography, CardContent, Divider } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAppDispatch } from "../hooks/reduxHook"
import { CartItem } from "../types/cart";
import { addToCart } from "../redux/reducers/cartReducer";
import { Product } from "../types/product";
import { fetchAllProducts } from "../redux/reducers/productReducer";

const FeaturedProducts = () => {
    const dispatch = useAppDispatch()
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

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
        // Fetch all products
        dispatch(fetchAllProducts()).then((response) => {

          // Check if the API call was successful
          if (response.payload) {
            const allProducts: Product[] = response.payload as Product[];

            // Filter the first five products from allProducts
            const maxFeaturedProducts = 5;
            const featuredProducts = allProducts.slice(0, maxFeaturedProducts);
            setFeaturedProducts(featuredProducts);
          } else {
            // Handle the case where the API call fails
            console.error("Failed to fetch products");
          }
        });
      }, [dispatch]);
      

    return (
        <Box style={{ display: "flex", flexDirection: "row" }}>
            {
                featuredProducts.map(product => (

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
                                    €{product.price}.00
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