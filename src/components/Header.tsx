import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const pages = [
        {
            nav: 'products',
            name: 'Products'
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
                        onClick={() => navigate("/")}
                    >
                        Fake Web Store
                    </Typography>
                    {
                        pages.map(page => (
                            <Link key={page.nav} to={page.nav} style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit" variant="text">{page.name}</Button>
                            </Link>

                        ))
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header