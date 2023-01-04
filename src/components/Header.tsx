import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    
                    <Typography 
                        variant="h4" 
                        component="div" 
                        sx={{ flexGrow: 1 }}
                        onClick={() => navigate("/") }
                    >
                        Fake Web Store
                    </Typography>
                    <Link to="products" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit" variant="text">Products</Button>
                    </Link>
                    <Link to="cart" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit" variant="text">Shopping Cart</Button>
                    </Link>
                    <Link to="login" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit" variant="text">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header