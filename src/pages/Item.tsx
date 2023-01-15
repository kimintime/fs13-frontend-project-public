import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Carousel from "react-material-ui-carousel";

import { useAppDispatch } from "../hooks/reduxHook";
import { addToCart } from "../redux/reducers/cartReducer";
import { CartItem } from "../types/cart";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UpdateProductModal from "../components/UpdateProductModal";

const Item = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()

    const [product, setProduct] = useState<CartItem>({
        id: 0,
        title: '',
        category: { name: '', id: 0, image: '' },
        description: '',
        price: 0,
        images: [],
        amount: 1,
    })

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            setProduct(data)

        } catch (err) {

            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAddToCart = () => {

        dispatch(addToCart(product))
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" >
            <Grid container justifyContent="center" alignItems="center" maxWidth="md">
                <Grid item md={4} mr={10}>
                    <Typography variant="h3" textAlign="center">{product.title}</Typography>
                    <Typography variant="subtitle1" textAlign="center">{product.category.name}</Typography>
                    <Typography variant="body1" mt={5}>{product.description}</Typography>
                    <Typography variant="h4" mt={5} textAlign="center">
                        €{product.price}.00
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<AddShoppingCartIcon />}
                            style={{ marginLeft: "10px" }}
                            onClick={() => handleAddToCart()}
                        >
                            Add to Cart
                        </Button>
                        <UpdateProductModal
                            oldTitle={product.title}
                            oldPrice={product.price}
                            oldDescription={product.description}
                            id={product.id}
                        />
                    </Typography>
                </Grid>
                <Grid item md={6} mt={5}>
                    <Carousel>
                        {
                            product.images.map(item => (
                                <Paper sx={{ height: 480, textAlign: "center" }} key={item}>
                                    <img
                                        alt={product.title}
                                        src={item}
                                        style={{
                                            height: '82%',
                                            width: '92%'
                                        }} />
                                </Paper>
                            ))
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Item