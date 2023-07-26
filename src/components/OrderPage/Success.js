import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Success.css"

function Success() {
    const location = useLocation();
    const navigate = useNavigate();
    const orderDetails = location.state.orderDetails;

    
    useEffect (() => {
        const timer = setTimeout(() => {
            navigate(`/`);
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate])
    

    return (
        <div id="success-page-container">
            <div id="success-header"> <h1>Teknolojik Yemekler</h1> </div>
            <div id="success-page-content">
                <div>
                    <div id="success-page-content-container">
                        <p id="message">lezzetin yolda</p>
                        <h2>SİPARİŞİN ALINDI</h2>
                    </div>
                    <hr className="custom-hr" />
                    <div id="succes-page-content-container-two">
                        <p id="product-name">{orderDetails.pizzaAdi}</p>
                        <div id="success-page-details">
                            <div>
                                <p>Pizza Boyutu: {orderDetails.size}</p>
                                <p>Hamur Kalınlığı: {orderDetails.crust}</p>
                                <p>Ek Malzemeler: {orderDetails.toppings.join(", ")}</p>
                                <p>Toplam Fiyat: {orderDetails.totalPrice} ₺</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
