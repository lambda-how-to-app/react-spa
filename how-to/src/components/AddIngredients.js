import React from "react";

const AddIngredients = (props) => {
   
   
    return (
        <>
             <div>
                <ul>
                    {props.ingredients && props.ingredients.map(ingredient => <li key={"key_ingredient_"+props.ingredients.indexOf(ingredient)}>{ingredient}</li>)}
                </ul>
            </div>
        </>
    )

}

export default AddIngredients;