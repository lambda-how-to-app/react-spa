import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const AddGuide = () => {
    const [inputValue, setInputValue] = useState('');
    const ingredientForm = document.getElementsByClassName('ingredientForm')
    const handleChange = (event) => { setInputValue({...inputValue}, event.target.value) };
    const elementKiller = (event) => {ingredientForm.removeChild(document.getElementById(event.target.value))};
    const handleIngredientSubmit = (event) => {
        event.preventDefault();
    }
    const newIngredient = (event) => {
        return (
            <div id={event.target.value}><p>{event.target.value}</p> <button onClick={elementKiller}><Icon name="trash alternate outline"/></button> </div>
        )
    };
    const enterHandler = (event) => {

        if (event.key === 'Enter') {
            //target element and add a new deletable "input" field above the input.
            ingredientForm.appendChild(newIngredient);
        } else {
            return;
        }
    }

    return (
        <>
            <fieldset>
                <form>
                    <label>
                        <h1>HOW-TO</h1>
                        <input type="text" />
                    </label>

                </form>
            </fieldset>

            {/*photo adder here*/}
            <label> Keywords: <input type="text" /> </label>


            <h2>WHAT'S NEEDED</h2>
            <div className='ingredientForm'>
                <fieldset>
                    <form onSubmit={event => {handleIngredientSubmit(event)}}>
                        <label>
                            <Input placeholder='add an ingredient...' onKeyPress={enterHandler} onChange={handleChange} />
                        </label>
                    </form>
                </fieldset>
            </div>

        </>
    )
}

export default AddGuide;