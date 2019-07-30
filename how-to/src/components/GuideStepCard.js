import React from "react";
import { Header, Card } from "semantic-ui-react";

const GuideStepCard = () => {
  return ( 
    <div>
        <Header as="h3" textAlign='center'>Step #1</Header>
        <Card.Group>
            <Card>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
                    accumsan accumsan varius. Praesent pulvinar neque id turpis dapibus 
                    maximus.
                </Card.Content>
            </Card>
        </Card.Group>
    </div> 
  );
};

export default GuideStepCard;
