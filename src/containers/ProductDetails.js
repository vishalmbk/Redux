import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeselectedProducts } from "../redux/Actions/ProductAction";


const ProductDetails = () => {
    const product = useSelector((state) => state.Product);
    const { image, title, price, category, description } = product
    const { productId } = useParams();
    const dispatch = useDispatch();
    
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Err", err)
        });
        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return ()=>{
            dispatch(removeselectedProducts());
        }
    }, [productId]);
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center align grid">
                        <div className="ui vertical divider">And</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />

                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Card</div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            )}
        </div>
    )
}
export default ProductDetails;