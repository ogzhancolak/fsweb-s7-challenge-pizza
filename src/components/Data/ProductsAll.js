import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsAll.css"
import { Link } from "react-router-dom";


function ProductsAll() {

    const [allproducts, setAllproducts] = useState([]);

    useEffect(() => {
        axios.get('https://6457e4580c15cb1482137304.mockapi.io/uruncesitleri')
            .then(res => {
                console.log(res.data);
                setAllproducts(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (

        <div id="all-products-main">
            <div id="all-products-main-container">
                <div className="all-products">
                    {allproducts.map(allproducts => (
                        <Link key={allproducts.id} to={`/order/${allproducts.id}`}>
                            <button className="all-products-types">
                                <img src={allproducts.foto} />
                                <div className="all-products-price">
                                    <h2>{allproducts.pizzaAdi}</h2>
                                    <div>
                                        <p>{allproducts.puan}</p>
                                        <p>({allproducts.satisAdedi})</p>
                                        <p className="price">{allproducts.Fiyat} ₺ </p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default ProductsAll;