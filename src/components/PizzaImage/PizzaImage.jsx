import React from 'react';
import classes from './PizzaImage.module.css'
import Pizza from '../../assets/images/pizza.jpg'
const pizzaImage = (props) => (
    <div className={classes.PizzaImageContainer}>
        <img src={Pizza} alt="pizza" className={classes.PizzaImage}/>
    </div>
);

export default pizzaImage;