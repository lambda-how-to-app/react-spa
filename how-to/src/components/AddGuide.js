import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AddNewStep from "./AddNewStep";
import AddIngredients from "./AddIngredients.js";

const AddGuide = () => {

  const [fieldValues, setFieldValues] = useState({title:"", ingredients:[], steps:''});
  const [guide, setGuide] = useState({title:"", ingredients:[], steps:''});
  const [ingredientsArray, setIngredients] = useState([]);

   const handleIngredientChange = event => {
    setIngredients([...ingredientsArray, event.target.value])
    console.log(ingredientsArray)
   };

  const handleIngredientSubmit = event => {
  event.preventDefault();
  let newArray = fieldValues.ingredients;
  console.log('new array 1', newArray);

  newArray.push(ingredientsArray[ingredientsArray.length-1]);
  console.log('new array 2', newArray);
  
  setGuide([fieldValues.ingredients, ...newArray]);

  console.log("fieldValues", fieldValues.ingredients);

  setIngredients(['']);

 };


  const handleChange = event => {
    setFieldValues({...fieldValues, [event.target.name]:event.target.value});
    console.log(fieldValues);
  };

  const newHandleChange = event => {
    event.preventDefault();
    console.log(guide);
    setGuide({...guide, ...fieldValues})
    console.log(guide);
  };

  const handleSave = event => {
    event.preventDefault();
    newHandleChange(event);

    //dont ignore this one though-
    /*This is where it would send the data to the back end. all data is saved as an object in a var called guide*/
  
  };

  return (
    <>
      <form onSubmit={event => newHandleChange(event)}>
        
        <label> Title:
          <Input
            type="text"
            placeholder="Add Guide Title"
            name="title"
            onChange={event => handleChange(event)}
          />
        </label>

        <div>
          <h1>What's Needed:</h1>
          <AddIngredients fieldValues={fieldValues} />

          {/* <form onSubmit={event => handleIngredientSubmit(event)}> */}

          <Input
            placeholder="enter what is needed..."
            name="ingredients"
            onChange={event => handleIngredientChange(event)}
            value={ingredientsArray[ingredientsArray.length-1]}
          />
          <button onClick={event => handleIngredientSubmit(event)}>submit ingredient</button>
          {/* </form> */}
        </div>

        <div>
          <AddNewStep guide={guide} />
          <h2>Add A Step</h2>
          {/* <form onSubmit={event => handleStepSubmit(event)}> */}
          <Input
            placeholder="enter steps..."
            name="steps"
            onChange={event => handleChange(event)}
          />
          <button>Add Another</button>
        </div>

        <div>
          <button onClick={event => handleSave(event)}>
            <p>Save</p>
          </button>
          <p>|</p>
          <Link to="/add-guide/delete">
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddGuide;




//import AddGuideImages from "./AddGuideImages.js";
//const [images, setImages] = useState("");
//const [keywords, setKeywords] = useState();
// const [title, setTitle] = useState([]);
// const [ingredients, setIngredients] = useState([]);
// const [steps, setSteps] = useState([]);

// const handleTitleSubmit = event => {
//   event.preventDefault();
//   setTitle([...title], event.target.value);
// };




// const handleStepSubmit = event => {
//   event.preventDefault();
//   setSteps([...steps], event.target.value);
// };

//images: [...images],
//keywords: [...keywords],

// const AddImageModal = () => (
//   <Modal trigger={<button>add images</button>}>
//     <Modal.Header>Add a photo</Modal.Header>
//     <Modal.Content form>
//       <Modal.Description>
//         <Header>enter image URL</Header>
//         <Form onSubmit={event => handleImageSubmit(event)}>
//           <Form.Field>
//             <label>
//               URL:
//               <input placeholder="Image URL Here..." />
//             </label>
//           </Form.Field>
//           <Button type="submit">Submit</Button>
//         </Form>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// );

{/* <AddGuideImages />
      <button onClick={() => AddImageModal()}>add images</button> */}

{/* <div>
        <form onSubmit={event => handleKeywordSubmit(event)}>
          <label>
            Keywords:
            <Input placeholder="enter keywords..." name="keywords"/>
          </label>
        </form>
      </div> */}


  // const handleImageSubmit = event => {
  //   event.preventDefault();
  //   setImages([...images], event.target.value);
  // };

  // const handleKeywordSubmit = event => {
  //   event.preventDefault();
  //   setKeywords([...keywords], event.target.value);
  // };

      //ignore the comment here
    // setGuide({
    //   title: [...title],
    //   ingredients: [...ingredients],
    //   steps: [...steps]
    // });
