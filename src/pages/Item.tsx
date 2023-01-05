import { useParams } from "react-router-dom"
import { useAppSelector } from "../hooks/reduxHook"

const Item = () => {
    const { id } = useParams()
    const product = useAppSelector(state => state.productReducer).filter(item => item.id === Number(id))[0]
    
    return (
        <div>
            <h2>{product.title}</h2>
            <h4>€{product.price}</h4>
            <ul>
                <li>{product.description}</li>
            </ul>
        
        </div>
    )
}

export default Item