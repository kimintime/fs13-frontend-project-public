import Header from "../components/Header"
import Products from "./Products"

const Home = () => {
    return (
        <div>
            <Header router={router} />
            <Products />
        </div>
    )
}

export default Home