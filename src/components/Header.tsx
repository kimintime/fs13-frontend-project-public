import { NavLink, useNavigate } from "react-router-dom"

import { AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const navigate = useNavigate()
    const pages = [
        {
            nav: '/',
            name: 'Home'
        },
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
                    onClick={() => navigate("/home")}
                >
                    Fake Web Store
                </Typography>
                {
                    pages.map(page => (
                        <NavLink key={page.nav} to={page.nav} style={{ textDecoration: 'none', color: 'white' }}>
                            <Button 
                                color="inherit" 
                                variant="text" 
                                startIcon=
                                {
                                    (page.nav === "cart" && <ShoppingCartOutlinedIcon />) || 
                                    (page.nav === "/" && <HomeIcon />) || 
                                    (page.nav === "login" && <AccountCircleOutlinedIcon />)
                                } 
                            >
                                {page.name}
                            </Button>
                        </NavLink>
                    ))
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header