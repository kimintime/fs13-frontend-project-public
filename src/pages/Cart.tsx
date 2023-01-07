
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { addToCart, removeFromCart, emptyCart } from "../redux/reducers/cartReducer";

const Cart = () => {
    const cart = useAppSelector(state => state.cartReducer)
    const dispatch = useAppDispatch()

    const total = cart.reduce((a, b) => a + b.product.price * b.amount, 0)

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
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>SubTotal</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map(item =>
                                    <TableRow key={item.product.id}>
                                        <TableCell>{item.product.title}</TableCell>
                                        <TableCell>{item.product.price}€</TableCell>
                                        <TableCell>{item.amount}</TableCell>
                                        <TableCell>{item.product.price * item.amount}€</TableCell>
                                        <TableCell>
                                            <button onClick={() => dispatch(addToCart(item))}>+</button>
                                            <button onClick={() => dispatch(removeFromCart(item))}>-</button>
                                        </TableCell>
                                    </TableRow>)}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell>€{total}.00</TableCell>
                                    <TableCell>
                                        <button>Place order</button>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart