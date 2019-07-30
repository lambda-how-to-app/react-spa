import React from "react";
import { Header, Card } from "semantic-ui-react";
import styled from 'styled-components'

const Instructions = styled.div `
  margin-top: 20px;
  margin-bottom: 30px;
`

const GuideStepCard = () => {
  return ( 
    <Instructions>
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
    </Instructions> 
  );
};

export default GuideStepCard;
