import { Outlet } from "react-router-dom"
import { CssBaseline } from "@mui/material"
import Header from "../components/Header"

const Root = () => {
    return (
        <CssBaseline>
            <Header />
            <Outlet />
        </CssBaseline>
    )
}

export default Root