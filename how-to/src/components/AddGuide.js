import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import NewIngredient from './NewStep';

//instead of this insane thing i'm trying to do, i should create an array of objects for each of the threeish forms.
//the form-objects should have a content key, value will be the user input
// we'll map over each array and create a series of elements based on user input with a unique key/ID 
// this means we'll need three other 'helper' components to make this form work. 
// one for photos, one for steps and one for ingredients.

const AddGuide = () => {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);

    const handleChange = (event) => { setIngredients([...ingredients], event.target.value) };
    const handleIngredientSubmit = (event) => {
        event.preventDefault();
    }
    const elementKiller = (event, arr) => { arr.splice(arr.indexOf(event.target.value)) };
    const enterHandler = (event) => {

        if (event.key === 'Enter') {
            //target element and add a new deletable "input" field above the input.
            steps && steps.map(step => {
                return (
                    <>
                        <h3>STEP #{steps.indexOf(step) + 1}</h3>
                        <NewStep key={"step_key=" + (steps.indexOf(step)) + 1} step={step} />
                    </>
                )
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
                        <Input placeholder='add an ingredient...' onKeyPress={event => enterHandler(event)} onChange={handleChange} />
                    </label>
                </form>
            </div>



            <div>
                {}

                <form onSubmit={event => { handleStepSubmit(event) }}>
                    <Input placeholder='enter steps...' onKeyPress={event => enterHandler(event)} />
                </form>
            </div>

        </>
    )
}

export default AddGuide;