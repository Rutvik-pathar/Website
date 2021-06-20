import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css'

function Cards() {

    return (
        <div className="cards">
            <h1>check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cads__wrapper">
                    <ul className="cards__item">
                        <CardsItem  src='/img-9.jpg'
                        text="explore the hidden waterfall deep inside the amazon jungle."
                        label="Adventuere"
                        path="/services" />
                    </ul>
                    <ul className="cads__item">
                         <CardsItem  src='/img-3.jpg'
                        text="explore the hidden waterfall deep inside the amazon jungle."
                        label="Adventuere"
                        path="/services" />
                    </ul>
                    <ul className="cards__item">
                          <CardsItem  src='/img-4.jpg'
                        text="explore the hidden waterfall deep inside the amazon jungle."
                        label="Adventuere"
                        path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards