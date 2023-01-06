import { Box, Grid, ImageList, ImageListItem } from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../hooks/reduxHook"

const Item = () => {
    const { id } = useParams()
    const product = useAppSelector(state => state.productReducer).filter(item => item.id === Number(id))[0]

    return (
        <Box justifyContent="center" alignItems="center" >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item  md={4}>
                    <h2>{product.title}</h2>
                    <h3>{product.category.name}</h3>
                    <h4>€{product.price}</h4>
                    <ul>
                        <li>{product.description}</li>
                    </ul>
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