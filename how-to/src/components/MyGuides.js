import React from "react";
import { Header, Card, Image, Pagination } from "semantic-ui-react";
import styled from "styled-components";

import choco from "../chocomilk.jpg";
import "./MyGuides.css";

const GuideContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LineDiv = styled.div`
  width: 353px;
  height: 8px;
  top: 9px;
  background: #5c5c5c;
  margin-bottom: 14px;
`;

// to edit with user's guide id
const handleClick = () => {
    console.log("guide clicked!");

};

function MyGuides() {
    return (
        <div>
            <GuideContainer>
                <Header as="h1">MY GUIDES</Header>
                <LineDiv>{/*grey line under the user card */}</LineDiv>

                {/* input sort/filter functionality here */}
                <p className-="sortTag">Sort/Filter</p>

                <Card.Group onClick={handleClick}> {/* add onClick funct here to link to individual user guide page */}
                    <Image src={choco} avatar />
                    <Card>
                        <Card.Content>
                            <Card.Header>Make Chocolate Milk</Card.Header>
                            <Card.Description>short description about this guide here!!!</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group> 

                <Card.Group onClick={handleClick}>
                    <Image src={choco} avatar />
                    <Card>
                        <Card.Content>
                            <Card.Header>Make Chocolate Milk</Card.Header>
                            <Card.Description>short description about this guide here!!!</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>

                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    // totalPages={10}
                />
            </GuideContainer>
        </div>
    );
}

export default MyGuides;