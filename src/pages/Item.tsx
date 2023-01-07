import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Box, Button, Grid, ImageList, ImageListItem, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAppDispatch } from "../hooks/reduxHook";
import { addToCart } from "../redux/reducers/cartReducer";
import { Product } from "../types/product";

const Item = () => {
    const dispatch = useAppDispatch()
    const [amount, setAmount] = useState(1)

    const { id } = useParams()
    // const product = useAppSelector(state => state.productReducer).filter(item => item.id === Number(id))[0]

    const [product, setProduct] = useState<Product>({
        id: 0,
        title: '',
        category: { name: '', id: 0, image: '' },
        description: '',
        price: 0,
        images: []
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
    }, [])

    const handleAddToCart = (event: any) => {
        setAmount(parseInt(event.target.value))
        dispatch(addToCart({amount, product}))

        console.log(product)
    }

    return (
        <Box justifyContent="center" alignItems="center" >
            <Grid container justifyContent="center" alignItems="center">
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
                            value={amount}
                            onClick={(event) => handleAddToCart(event)}
                        >
                            Add to Cart
                        </Button>
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <ImageList cols={2} gap={8}>
                        {product.images.map((item) => (
                            <ImageListItem key={item}>
                                <img
                                    src={item}
                                    alt={product.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Item