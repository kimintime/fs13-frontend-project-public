
import FeaturedCategories from "../components/FeaturedCategories"
import FeaturedProducts from "../components/FeaturedProducts"

import { Box, Divider, Typography } from "@mui/material"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home = () => {
    
    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15px",
            width: "100%"
        }}>
            <Typography variant="h2">Welcome to the Fake Store</Typography>
            <Typography variant="subtitle1">Where the items are made up, and the shop doesn't deliver!</Typography>
            <Box mt={5}>
                <FeaturedCategories />
            </Box>
            <Typography variant="h6">Browse featured products</Typography>
            <Box mt={5}>
            <Divider variant="middle" />
                <FeaturedProducts />
            </Box>
        </Box>
    )
}

export default Home