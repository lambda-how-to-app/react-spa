import React from "react";
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const AddGuide = () => {
const [inputValue, setInputValue] = useState('');

const handleChange = (event) => {setInputValue(event.target.value)};
    
    const enterHandler = (event) => {

        let newIngredient = (event) => {
            return (
                    <div><p>{event.target.value}</p> </div>
            )
        };

        if (event.key === 'Enter') {
            //target element and add a new deletable "input" field above the input.
            document.querySelector('ingredientForm').appendChild(newIngredient);
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
                <form>
                    <label>
                        <Input placeholder='add an ingredient...' onKeyPress={enterHandler} onChange={handleChange}/>
                    </label>
                </form>
            </fieldset>
            </div>
        </>
    )
}

export default AddGuide;