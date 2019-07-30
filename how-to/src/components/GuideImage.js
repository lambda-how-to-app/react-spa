import React from "react";
import { Card, Image } from "semantic-ui-react";

const GuideImage = () => {
    return (
        <div>
            <Card>
                <Image src='src/chocomilk.jpg' alt="Photo of Guide" wrapped-ui={false} />
            </Card>
        </div>
    );
};

export default GuideImage;