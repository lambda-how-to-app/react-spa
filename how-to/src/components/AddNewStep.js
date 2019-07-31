import React from "react";

const AddNewStep = (props) => {
    return (
        <>
            {props.steps && props.steps.map(step =>
                <>
                <h3 key={'step_num_' + (props.steps.indexOf(step) + 1)}>STEP #{steps.indexOf(step) + 1}</h3>
                <div>
                    <p key={"step_key=" + (props.steps.indexOf(step)) + 1}>{step}</p>
                </div> 
                </>
             )}
        </>
    )
};

export default AddNewStep;