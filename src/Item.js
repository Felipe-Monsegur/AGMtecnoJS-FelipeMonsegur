import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./firebase"

const Item = ({ title, image, price, id }) => {
    return (
        <article className="product__card card">
            <h1 className="card__title">{title} </h1>
            <h2>${price}</h2>
            <img src={image} alt={title} className="card__img" />
            <button className="card__button">
                {/* <Link to={"/item/" + id} > */}
                <Link to={`/item/${id}`} >
                    Ver detalle
                </Link>
            </button>
        </article>
    )
}
export default Item