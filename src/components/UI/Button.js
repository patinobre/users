import React from 'react';
import classes from './Button.module.css';

// cria o componente Button
const Button = (props) => {

    //retorna o HTML/JSX
    return (

        <button
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>

    );

};

export default Button;