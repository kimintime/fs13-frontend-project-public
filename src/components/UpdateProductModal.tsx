import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box,
    Button, 
    Divider, 
    IconButton, 
    Modal, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableFooter, 
    TableHead, 
    TableRow, 
    TextField, 
    Typography } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"

import { useAppSelector, useAppDispatch } from "../hooks/reduxHook"
import { EditProduct } from "../types/product"
import { deleteProduct, updateProduct } from "../redux/reducers/productReducer"

export interface EditProductProps {
    id: number
    oldTitle: string
    oldDescription: string
    oldPrice: number
}

const UpdateProductModal = ({ id, oldTitle, oldDescription, oldPrice }: EditProductProps) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.userReducer)
    const navigate = useNavigate()

    const [title, setTitle] = useState(oldTitle)
    const [price, setPrice] = useState(oldPrice)
    const [description, setDescription] = useState(oldDescription)

    const [change, setChange] = useState(false)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = () => {
        setChange(!change)

        if (change === false) {
            setTitle(oldTitle)
            setDescription(oldDescription)
            setPrice(oldPrice)
        }
    }

    const editProduct = () => {

        if (price <= 0 || isNaN(price)) {
            alert("Price must not be zero or below. Please try again")
        }

        console.log(title, description, price)

        const newProduct: EditProduct = {
            title: title,
            description: description,
            price: price,
            id: id
        }

        dispatch(updateProduct(newProduct))
        setOpen(false)
    }

    const handleDelete = () => {
        dispatch(deleteProduct(id))
        setOpen(false)
        navigate("/")

    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {user.currentUser.role === "admin" ?
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    color="error"
                    sx={{ marginTop: 5 }}
                    onClick={handleOpen}
                >
                    Modify Product
                </Button>
                : null
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        margin: " 0 auto",
                        marginTop: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "white",
                        maxWidth: 400,
                        padding: 5,
                        borderRadius: 5,
                    }}>
                    <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                        Update Product
                    </Typography>
                    <Divider variant="middle" />
                    <IconButton
                        color={change ? "secondary" : "primary"}
                        onClick={handleChange}
                    >
                        <EditIcon />
                    </IconButton>

                    <TableContainer>
                        <Table>
                            <TableHead />
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Product Title:</Typography>
                                    </TableCell>
                                    <TableCell>
                                        {change ?
                                            <TextField
                                                variant="standard"
                                                value={title}
                                                onChange={(event) => setTitle(event.target.value)}
                                            /> : oldTitle
                                        }
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Description:</Typography>
                                    </TableCell>
                                    <TableCell>
                                        {change ?
                                            <TextField
                                                variant="standard"
                                                value={description}
                                                onChange={(event) => setDescription(event.target.value)}
                                            /> : oldDescription
                                        }
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Price:</Typography>
                                    </TableCell>
                                    <TableCell>
                                        {change ?
                                            <TextField
                                                variant="standard"
                                                type="number"
                                                value={price | 0}
                                                onChange={(event) => setPrice(parseInt(event.target.value))}
                                            /> : oldPrice
                                        }
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter />
                        </Table>
                    </TableContainer>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ marginTop: 2 }}
                        onClick={editProduct}
                    >
                        Update Product
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        sx={{ marginTop: 2 }}
                        onClick={handleDelete}
                    >
                        Delete Product
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2 }}
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Box>
            </Modal >

        </Box >
    )
}

export default UpdateProductModal
