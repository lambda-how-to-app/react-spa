import React, { useState } from "react";
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AddNewStep from './AddNewStep';
import AddGuideImages from './AddGuideImages.js';
import AddIngredients from './AddIngredients.js';


const AddGuide = () => {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [fieldValues, setFieldValues] = useState('');
    const [guide, setGuide] = useState({});

    const handleChange = (event) => {
        setFieldValues(event.target.value)
    }

    const handleTitleSubmit = event => {
        event.preventDefault();
        setTitle(event.target.value);
    };

    const handleIngredientSubmit = event => {
        event.preventDefault();
        setIngredients([...ingredients], event.target.value)
    }

    const handleStepSubmit = event => {
        event.preventDefault();
        setSteps([...steps], event.target.value);
    }

    const handleSave = event => {
        event.preventDefault();
        setGuide({"title": title, "images": [...images], "ingredients": [...ingredients], "steps":[...steps]});
        {/*This is where it would send the data to the back end. all data is saved as an object in a var called guide*/}
    }
    return (
        <>
            <form onSubmit={event => handleTitleSubmit(event)}>
                <Input placeholder='Add Guide Title' onChange={event => handleChange(event)} value={title} />
            </form>

            <AddGuideImages />
            <button><p>add images</p></button>
            {/*design guide doesnt really have an image enter idea. i'll create a modal to accept a list of image urls?*/}

            <div>
                <h1>What's Needed:</h1>
                <AddIngredients ingredients={ingredients} />
                <form onSubmit={event => handleIngredientSubmit(event)}>
                    <Input placeholder='enter what is needed...' onChange={event => handleChange(event)} />
                </form>
            </div>

            <div>
                <AddNewStep steps={steps}/>
                <h2>Add A Step</h2>
                <form onSubmit={event => handleStepSubmit(event)}>
                    <Input placeholder='enter steps...' onChange={event => handleChange(event)} />
                </form>
                <button>Add Another</button>
            </div>

            <div>
                <button onClick={handleSave}><p>Save</p></button>
                <p>|</p>
                <link><p>Delete</p></link>
            </div>
        </>
    )
}

export default AddGuide;


//     const [ingredients, setIngredients] = useState([]);
//     const [steps, setSteps] = useState([]);

//     const handleChange = (event) => { setIngredients([...ingredients], event.target.value) };
//     const handleIngredientSubmit = (event) => {
//         event.preventDefault();
//     }
//     const elementKiller = (event, arr) => { arr.splice(arr.indexOf(event.target.value)) };

//     const stepEnterHandler = (event) => {
//         if (event.key === 'Enter') {
//             //target element and add a new deletable "input" field above the input.
//             steps && steps.map(step => {
//                 return (
//                     <>
//                         <h3>STEP #{steps.indexOf(step) + 1}</h3>
//                         <NewStep key={"step_key=" + (steps.indexOf(step)) + 1} step={step} />
//                     </>
//                 )
//             })
//         } else {
//             return;
//         }
//     }


//     //keep this?
//     const handleStepSubmit = (event) => {
//         event.preventDefault();
//         setSteps([...steps], event.target.value);
//     }

//     return (
//         <>
//             <form>
//                 <label>
//                     <h1>HOW-TO</h1>
//                     <input type="text" />
//                 </label>
//             </form>


//             {/*photo adder here*/}
//             <label> Keywords: <input type="text" /> </label>


//             <h2>WHAT'S NEEDED</h2>
//             <div className='ingredientForm'>
//                 <form onSubmit={event => { handleIngredientSubmit(event) }}>
//                     <label>
//                         <Input placeholder='add an ingredient...' onKeyPress={event => enterHandler(event)} onChange={handleChange} />
//                     </label>
//                 </form>
//             </div>



//             <div>
//                 <form onSubmit={event => { handleStepSubmit(event) }}>
//                     <Input placeholder='enter steps...' onKeyPress={event => stepEnterHandler(event)} />
//                 </form>
//             </div>

//         </>
//     )
// }