import { useState } from "react"
import { Box, Button, Modal, TextField, Typography } from "@mui/material"

import { useAppSelector, useAppDispatch } from "../hooks/reduxHook"
import { createProduct } from "../redux/reducers/productReducer"
import { productImages } from "../types/images"

const AddProductModal = () => {
    const user = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [categoryId, setCategoryId] = useState(0)

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const addProduct = () => {
        dispatch(createProduct({
            title: title,
            price: price,
            description: description,
            categoryId: categoryId,
            images: productImages
        }))

        setOpen(false)
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
                    onClick={handleOpen}
                >
                    Add
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
                        margin:" 0 auto",
                        marginTop: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "white",
                        maxWidth: 400,
                        padding: 5,
                        borderRadius: 5,
                    }}>
                    <Typography variant="h5" sx={{textDecoration: "underline"}}>
                        Add Product
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        label="Category ID"
                        type="number"
                        helperText="1) Clothes, 2) Electronics, 3) Furniture, 4) Shoes, 5) Other"
                        value={categoryId | 0}
                        placeholder="1) Clothes, 2) Electronics, 3) Furniture, 4) Shoes, 5) Other"
                        variant="standard"
                        onChange={(event) => setCategoryId(parseInt(event.target.value))}
                    />
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        label="Product Title"
                        type="title"
                        value={title}
                        placeholder="Enter title"
                        variant="standard"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        label="Product Description"
                        type="description"
                        value={description}
                        placeholder="Enter description"
                        variant="standard"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        label="Product Price"
                        type="number"
                        value={price | 0}
                        placeholder="Enter description"
                        variant="standard"
                        onChange={(event) => setPrice(parseInt(event.target.value))}
                    />
                    <Button 
                        variant="contained" 
                        color="success" 
                        sx={{marginTop: 2}}
                        onClick={addProduct}
                    >
                        Add Product
                    </Button>
                    <Button 
                        variant="contained" 
                        color="error" 
                        sx={{marginTop: 2}} 
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Box>
            </Modal >
        </Box >
    )
}

export default AddProductModal
