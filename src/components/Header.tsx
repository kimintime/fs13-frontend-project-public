import React, { useState } from "react"
import { RouterProviderProps } from "react-router-dom"

import { AppBar, Container, Toolbar, Typography } from "@mui/material"

const Header = ({ router }: RouterProviderProps) => {
    const pages = useState([router])

    const ResponsiveAppBar = () => {
        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

        const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
        }

        const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElUser(event.currentTarget);
        }

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        }

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        }

    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Fake Webstore
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header