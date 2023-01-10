import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

import { AppBar, IconButton, Toolbar, Typography, Button, Badge, Avatar } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';

import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { authenticateCredentials } from "../redux/reducers/userReducer";


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.userReducer)
    const cart = useAppSelector(state => state.cartReducer)

    const [badge, setBadge] = useState(0)

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
            nav: 'profile',
            name: "Profile"
        }
    ]

    const handleBadge = () => {
        let sum = 0
        cart.forEach(item => {
            sum += item.amount
        })

        setBadge(sum)
    }

    useEffect(() => {
        dispatch(authenticateCredentials({ email: user.currentUser.email, password: user.currentUser.password }));
    }, [dispatch, user.currentUser]);

    useEffect(() => {
        handleBadge()
    })

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
                                {user.currentUser.id === 0 ?

                                    (page.nav === "cart" && <Badge badgeContent={badge} color="success"><ShoppingCartOutlinedIcon /></Badge>) ||
                                    (page.nav === "/" && <HomeIcon />) ||
                                    (page.nav === "profile" && <AccountCircleOutlinedIcon />)

                                    :
                                    (page.nav === "cart" && <Badge badgeContent={badge} color="success"><ShoppingCartOutlinedIcon /></Badge>) ||
                                    (page.nav === "/" && <HomeIcon />) ||
                                    (page.nav === "profile" && <Avatar
                                        alt={user.currentUser.name}
                                        src={user.currentUser.avatar}
                                        sx={{ width: 35, height: 35 }} />)
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