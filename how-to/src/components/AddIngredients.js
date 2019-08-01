import React, {useEffect} from "react";

const AddIngredients = (props) => {
   const {guide} = props;

   useEffect(()=>{
       console.log('props changed')
   },[guide]);
   
    return (
            <div>
               <ul>
                   {guide && guide.ingredients.map(ingredient => <li key={"key_ingredient_"+guide.ingredients.indexOf(ingredient)}>{ingredient}</li>)}
               </ul>
           </div>        
        )}
        


export default AddIngredients;