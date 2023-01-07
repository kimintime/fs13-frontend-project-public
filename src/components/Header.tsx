import { Link, useNavigate } from "react-router-dom"

import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
    const navigate = useNavigate()
    const pages = [
        {
            nav: 'products',
            name: 'Products'
        },
        {
            nav: 'categories',
            name: 'Categories'
        },
        {
            nav: 'cart',
            name: 'Shopping Cart',
        },
        {
            nav: 'login',
            name: 'Login'
        },
    ]

    return (
        <AppBar position="sticky">
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
                    onClick={() => navigate("/")}
                >
                    Fake Web Store
                </Typography>
                {
                    pages.map(page => (
                        <Link key={page.nav} to={page.nav} style={{ textDecoration: 'none', color: 'white' }}>
                            <Button 
                                color="inherit" 
                                variant="text" 
                                startIcon={page.nav === "cart" && <ShoppingCartOutlinedIcon />} 
                                endIcon={page.nav === "login" && <AccountCircleOutlinedIcon />}>
                                {page.name}
                            </Button>
                        </Link>
                    ))
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header