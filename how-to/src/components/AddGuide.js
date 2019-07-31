import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

    //instead of this insane thing i'm trying to do, i should create an array of objects for each of the threeish forms.
    //the form-objects should have a content key, value will be the user input
    // we'll map over each array and create a series of elements based on user input with a unique key/ID 
    // this means we'll need three other 'helper' components to make this form work. 

    ;
const AddGuide = () => {
    const [inputValue, setInputValue] = useState('');

    const ingredientForm = document.getElementsByClassName('ingredientForm')
    const handleChange = (event) => { setInputValue({ ...inputValue }, event.target.value) };

    const handleIngredientSubmit = (event) => {
        event.preventDefault();
    }

    const [steps, setSteps] = useState([])
    const elementKiller = (event, arr) => { arr.splice(arr.indexOf(event.target.value)) };

    

    const NewIngredient = (props) => {
        return (

            <div>
                <p>{props.step}</p> <button onClick={elementKiller}><Icon name="trash alternate outline" /></button></div>


        )
    };

    const enterHandler = (event) => {

        if (event.key === 'Enter') {
            //target element and add a new deletable "input" field above the input.
            steps && steps.map(step => {
                return (
                <>
                    <h3>STEP #{steps.indexOf(step) + 1}</h3>
                    <NewIngredient key={"step_key=" + (steps.indexOf(step)) + 1} step={step} />
                </>)
                })
        } else {
            return;
        }
    }


//keep this?
    const handleStepSubmit = (event) => {
        event.preventDefault();
        setSteps([...steps], event.target.value);
    }

    return (
        <>
            <form>
                <label>
                    <h1>HOW-TO</h1>
                    <input type="text" />
                </label>
            </form>


            {/*photo adder here*/}
            <label> Keywords: <input type="text" /> </label>


            <h2>WHAT'S NEEDED</h2>
            <div className='ingredientForm'>
                <form onSubmit={event => { handleIngredientSubmit(event) }}>
                    <label>
                        <Input placeholder='add an ingredient...' onKeyPress={enterHandler} onChange={handleChange} />
                    </label>
                </form>
            </div>

 

            <div>
                {}

                <form onSubmit={event => { handleStepSubmit(event) }}>
                    <Input placeholder='enter steps...' />
                </form>
            </div>

        </>
    )
}

export default AddGuide;