import React from "react";

const NewStep = (props) => {
    return (
        <div>
            <p>{props.step}</p> 
            <button onClick={elementKiller}>
                <Icon name="trash alternate outline" />
            </button>
        </div>
    )
};

export default NewStep;