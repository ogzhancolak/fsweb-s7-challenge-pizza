import React, { useEffect, useState } from "react";
import "./Order.css"
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderForm from "./OrderForm"
import { NavLink } from "react-router-dom";

function Order() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://6457e4580c15cb1482137304.mockapi.io/uruncesitleri/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);

    return (
        <div>
            <div id="header">
                <NavLink to="/" style={{ color: "#CE2829", textDecoration: "underline" }} >
                    <h2> Teknolojik Yemekler </h2>
                </NavLink>
            </div>
            <div id="product-container">
                <div id="product-main-container">
                    <div className="product">
                        <img src={product.foto} alt={product.pizzaAdi} />
                        <div className="product-details">
                            <h1>{product.pizzaAdi}</h1>
                            <div className="price-puan">
                                <p id="price" >{product.Fiyat} ₺ </p>
                                <p id="puan" >{product.puan}</p>
                                <p id="satisAdedi">({product.satisAdedi})</p>
                            </div>
                            <p className="explanation" >{product.aciklamasi}</p>
                        </div>
                    </div>
                </div>
            </div>
            <OrderForm product={product} />
            <Footer />
        </div>

    )
}

export default Order;