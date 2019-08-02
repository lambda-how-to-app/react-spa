import React from 'react';
import { Card, Image } from "semantic-ui-react";
import choco from "../chocomilk.jpg";

const MyGuidesPage2 = props => {

    return (
        <div>
            {props.page.map(pagee => (
                <Card.Group>
                    <Image src={choco} avatar />
                    <Card>
                        <Card.Content>
                            <Card.Header>{pagee.pageTitle}</Card.Header>
                            <Card.Description>{pagee.pageDesc}</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            ))}
        </div>
    );
};

export default MyGuidesPage2;