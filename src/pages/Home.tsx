import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Products from "./Products"

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Home