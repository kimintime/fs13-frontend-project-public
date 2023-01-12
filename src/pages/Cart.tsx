import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { addToCart, removeFromCart, emptyCart } from "../redux/reducers/cartReducer";


const Cart = () => {
    const cart = useAppSelector(state => state.cartReducer)
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)

    const total = cart.reduce((a, b) => a + b.price * b.amount, 0)

    const handleShow = () => {
        cart.forEach(item => {
            if (item.amount > 0) {
                setShow(true)
            }
        })
    }

    useEffect(() => {
        handleShow()
    })

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "15px"
        }}
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={8}>
                    <Typography textAlign="center">Checkout</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="right">SubTotal</TableCell>
                                    <TableCell align="center">Edit Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map(item =>
                                    <TableRow key={item.id}>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>€{item.price}.00</TableCell>
                                        <TableCell align="center">{item.amount}</TableCell>
                                        <TableCell align="right">€{item.price * item.amount}.00</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => dispatch(addToCart(item))}>
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => dispatch(removeFromCart(item))}>
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell>€{total}.00</TableCell>
                                    <TableCell>
                                        {show ?
                                            <Button color="success">Place order</Button>
                                            : null
                                        }
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                    <Divider variant="middle" />
                </Grid>
            </Grid>
            {show ?
                <Button color="warning" onClick={() => dispatch(emptyCart())}>Empty Cart</Button>
                : null
            }
        </Box>
    )
}

export default Cart