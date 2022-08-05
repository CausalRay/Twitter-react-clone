import React from 'react';
import "./sidebaroptions.css"


const Sidebaroptions = ({active, text, Icon}) => {
    return (
        <div className={`sidebaroptions ${active && 'sidebaroption__active'}`}>
            <Icon />
            <h2>{text}</h2> 
        </div>
    );
}

export default Sidebaroptions;
