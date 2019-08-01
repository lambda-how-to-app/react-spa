import React from "react";

const AddNewStep = (props) => {
    return (
        <>
            {props.guide.steps && props.guide.steps.map(step =>
                <>
                <h3 key={'step_num_' + (props.guide.steps.indexOf(step) + 1)}>STEP #{props.guide.steps.indexOf(step) + 1}</h3>
                <div>
                    <p key={"step_key=" + (props.guide.steps.indexOf(step)) + 1}>{step}</p>
                </div> 
                </>
             )}
        </>
    )
};

export default AddNewStep;