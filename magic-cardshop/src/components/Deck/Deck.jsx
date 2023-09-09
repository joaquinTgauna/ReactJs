import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import React from 'react'

const Deck = () => {
    const { data, buyProducts } = useContext(DataContext)

    return (

        <div>
            {
                data
                    .filter((element) => {
                        return element.type === "Deck"
                    })
                    .map((Products) => {

                        return (
                            <div className='card'>
                                <img src={Products.img} alt='img-product-card' />
                                <h3>{Products.name}</h3>
                                <h4>{Products.price}$</h4>
                                <button onClick={() => buyProducts(Products)}>Add To Cart</button>

                            </div>
                        )
                    })
            }
        </div>
    )

}

export default Deck