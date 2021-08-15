import React from 'react';

const Repices = ({title, img, ingredients}) => {
    return (
        <div className='box'>
            <div className='front'>
                <img src={img} alt={title} className='img'/>
                <h2>{title}</h2>
            </div>
            <div className='back'>
                <ol>
                {ingredients.map((ingredient, index) =>{
                    return(
                        <li key={index}>{ingredient.text}</li>
                    )
                })}
                
                </ol>
            </div>
        </div>
    );
};

export default Repices;